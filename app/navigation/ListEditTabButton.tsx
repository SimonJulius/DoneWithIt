import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";

const ListEditTabButton = ({ onPress }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.mainView}>
        <MaterialCommunityIcons name="plus" size={35} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default ListEditTabButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: colors.primary,
    top: -20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 10,
    borderColor: colors.white,
  },
  mainView: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
