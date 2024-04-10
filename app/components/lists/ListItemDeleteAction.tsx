import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  PressableProps,
  ViewProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../configs/colors";

type MssagesScreenProps = PressableProps & ViewProps;

function ListItemDeleteAction({ onPress }: MssagesScreenProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
