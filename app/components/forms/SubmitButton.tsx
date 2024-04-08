import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton, { ButtonProps } from "../AppButton";
import { useFormikContext } from "formik";

interface SubmitButtonProps extends ButtonProps {
  label: string;
}
const SubmitButton = ({ label, ...restProps }: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={label}
      {...restProps}
      onPress={handleSubmit as (e?: GestureResponderEvent) => void}
    />
  );
};

export default SubmitButton;

const styles = StyleSheet.create({});
