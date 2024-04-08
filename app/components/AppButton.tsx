import {
  View,
  PressableProps,
  StyleSheet,
  Pressable,
  ViewStyle,
  DimensionValue,
  TextStyle,
  ViewProps,
} from "react-native";
import React, { ReactNode, useMemo, useState } from "react";
import AppText from "./AppText";
import colors, { AppColorsProperties } from "../configs/colors";

type ButtonVariant = "solid" | "outline";
type ButtonColor = "primary" | "secondary";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonShape = "round" | "square" | "default";

type VariantProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  shape?: ButtonShape;
  title?: string;
};
export type ButtonProps = PressableProps & VariantProps & ViewProps;

const flattenStyles = StyleSheet.flatten;

export default function AppButton({
  children,
  size,
  color,
  title,
  onPressIn,
  onPressOut,
  style,
  ...restProps
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);

  const handlePressedIn = () => {
    setPressed(true);
  };
  const handlePressedOut = () => {
    setPressed(false);
  };
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
    if (color === "primary" || color === "secondary") {
      buttonTextStyle.push({ color: colors.white });
    }
    buttonViewStyles.push({
      backgroundColor: colors[color!],
    });

    if (color === "primary") {
      buttonViewStyles.push({
        backgroundColor: pressed ? colors.primary100 : colors.primary,
      });
    }

    return { buttonTextStyle, buttonViewStyles };
  }, [size, color, pressed]);
  return (
    <View style={[style, flattenStyles(buttonViewStyles)]}>
      <Pressable
        onPressIn={handlePressedIn}
        onPressOut={handlePressedOut}
        style={styles.pressableStyles}
        {...restProps}
      >
        <AppText style={[flattenStyles(buttonTextStyle)]}>
          {title
            ? title
            : typeof children === "string"
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
