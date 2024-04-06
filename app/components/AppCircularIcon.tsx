import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AppText from "./AppText";
import colors from "../configs/colors";

type AppCircularIconProps = ViewProps & {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconViewBackground: string;
  size: number;
};

const AppCircularIcon = ({
  iconName,
  size,
  iconViewBackground,
}: AppCircularIconProps) => {
  return (
    <View
      style={StyleSheet.compose(styles.iconView, {
        backgroundColor: iconViewBackground,
        width: size * 2,
        height: size * 2,
        borderRadius: size,
      })}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={size}
        color={colors.white}
      />
    </View>
  );
};

export default AppCircularIcon;

const styles = StyleSheet.create({
  iconView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
