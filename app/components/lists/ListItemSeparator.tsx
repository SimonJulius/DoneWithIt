import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import colors from "../../configs/colors";

type SeperatorProps = {
  seperatorHeight?: number;
};

const LisItemtSeparator = ({ seperatorHeight }: SeperatorProps) => {
  return <View style={[styles.seprator, { height: seperatorHeight }]} />;
};

export default LisItemtSeparator;

const styles = StyleSheet.create({
  seprator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
