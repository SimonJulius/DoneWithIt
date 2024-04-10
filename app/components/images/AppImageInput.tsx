import {
  StyleSheet,
  Pressable,
  PressableProps,
  View,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../configs/colors";

interface AppImageInput extends PressableProps {
  onChangeImage?: () => void;
  imageUri: string;
}
const AppImageInput = ({ imageUri, onChangeImage, ...rest }: AppImageInput) => {
  return (
    <Pressable onPress={onChangeImage} style={styles.container} {...rest}>
      <MaterialCommunityIcons name="camera" size={40} color={colors.gray} />
    </Pressable>
  );
};

export default AppImageInput;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    borderRadius: 10,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
});
