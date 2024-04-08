import { StyleSheet } from "react-native";
import React from "react";
import ErrorMessageText from "./ErrorMessageText";
import { useFormikContext } from "formik";
import AppPicker, { AppPickerProps } from "../AppPicker";

interface AppFormFiedProps extends AppPickerProps {
  name: string;
}
const AppFormField = ({ name, ...restProps }: AppFormFiedProps) => {
  const { setFieldValue, setFieldTouched, touched, errors, values } =
    useFormikContext();
  return (
    <>
      <AppPicker
        {...restProps}
        onBlur={() => setFieldTouched(name)}
        onSelect={(item) => setFieldValue(name, item)}
      />
      <ErrorMessageText
        errorMessage={errors[name as keyof {}]}
        visible={touched[name as keyof {}]}
      />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
