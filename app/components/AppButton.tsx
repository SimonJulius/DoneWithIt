import {
  View,
  PressableProps,
  StyleSheet,
  Pressable,
  ViewStyle,
  DimensionValue,
  TextStyle,
} from "react-native";
import React, { ReactNode, useMemo } from "react";
import AppText from "./AppText";
import colors from "../configs/colors";

type ButtonVariant = "solid" | "outline";

type ButtonColor = "primary" | "secondary";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonShape = "round" | "square" | "default";

type VariantProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  shape?: ButtonShape;
};
type ButtonProps = PressableProps & VariantProps;

const flattenStyles = StyleSheet.flatten;

export default function AppButton({ children, size, color }: ButtonProps) {
  const { buttonViewStyles, buttonTextStyle } = useMemo(() => {
    const buttonViewStyles: ViewStyle[] = [];
    const buttonTextStyle: TextStyle[] = [];

    if (size === "md") {
      buttonViewStyles.push({
        height: 50,
        width: "100%",
        borderRadius: 25,
      });
      buttonTextStyle.push({
        fontSize: 22,
        fontWeight: "600",
      });
    }
    if (color === "primary" || "secondary") {
      buttonTextStyle.push({ color: colors.white });
    }

    buttonViewStyles.push({
      backgroundColor: colors[color!],
    });
    return { buttonViewStyles, buttonTextStyle };
  }, [size, color]);
  return (
    <View style={[flattenStyles(buttonViewStyles)]}>
      <Pressable style={styles.pressableStyles}>
        <AppText style={[flattenStyles(buttonTextStyle)]}>
          {typeof children === "string"
            ? children.toLocaleUpperCase()
            : (children as ReactNode)}
        </AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
