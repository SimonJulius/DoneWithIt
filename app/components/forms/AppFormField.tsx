import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput, { AppTextProps } from "../AppTextInput";
import ErrorMessageText from "./ErrorMessageText";
import { useFormikContext } from "formik";

interface AppFormFiedProps extends AppTextProps {
  name: string;
}
const AppFormField = ({ name, ...restProps }: AppFormFiedProps) => {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...restProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
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
