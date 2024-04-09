import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import React from "react";
import AppText, { AppTextProps } from "../AppText";
import colors from "../../configs/colors";

type PickerItemProps = TouchableHighlightProps & {
  label?: string;
};

const PickerItem = ({ label, onPress, ...rest }: PickerItemProps) => {
  return (
    <TouchableHighlight
      {...rest}
      onPress={onPress}
      underlayColor={colors.light}
    >
      <AppText>{label}</AppText>
    </TouchableHighlight>
  );
};

export default PickerItem;

const styles = StyleSheet.create({});
