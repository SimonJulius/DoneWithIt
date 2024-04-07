import { StyleSheet, TextProps, View, ViewProps } from "react-native";
import React, { ReactNode } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../configs/colors";

type AppTextProps = {
  selected?: string;
} & TextProps &
  ViewProps;

const AppPicker = ({ selected }: AppTextProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="apps" size={20} color={colors.gray} />
      <AppText>{selected}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={colors.gray}
        style={styles.cheveron}
      />
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  cheveron: {
    marginLeft: "auto",
  },
});
