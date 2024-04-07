import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from "react-native";
import React, { ReactNode, useMemo } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";

type AppTextProps = {
  leftIconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  rightIconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconSize?: number;
  placeholder?: string;
  marginBottom?: number;
  marginTop?: number;
} & TextInputProps &
  ViewProps;

const AppTextInput = ({
  rightIconName,
  leftIconName,
  iconSize,
  placeholder,
  marginBottom,
  marginTop,
  style,
  ...otherProps
}: AppTextProps) => {
  const marginStylings = useMemo(() => {
    return {
      marginTop,
      marginBottom,
    };
  }, [marginBottom, marginTop]);
  return (
    <View style={[styles.container, style, marginStylings]}>
      {leftIconName && (
        <MaterialCommunityIcons
          name={leftIconName}
          size={iconSize}
          color={colors.gray}
        />
      )}
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        {...otherProps}
      >
        {}
      </TextInput>
      {rightIconName && (
        <MaterialCommunityIcons
          name={rightIconName}
          size={iconSize}
          color={colors.gray}
          style={styles.rightIcon}
        />
      )}
    </View>
  );
};

export default AppTextInput;

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
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  rightIcon: {
    // marginLeft: "auto",
  },
});
