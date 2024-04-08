import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../configs/colors";

const ErrorMessageText = ({
  errorMessage,
  visible,
}: {
  errorMessage?: string;
  visible: boolean;
}) => {
  if (!errorMessage || !visible) return null;
  return <AppText style={styles.error}>{errorMessage}</AppText>;
};

export default ErrorMessageText;

const styles = StyleSheet.create({
  error: {
    marginTop: 7,
    paddingLeft: 20,
    color: colors.danger,
  },
});
