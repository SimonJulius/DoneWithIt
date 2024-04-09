import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../configs/colors";
import AppText from "../AppText";
import { PickerItemComponentProps } from "../AppPicker";

export type CategoryPickerProps = TouchableHighlightProps &
  PickerItemComponentProps;

const CategoryPicker = ({
  onPress,
  backgroundColor,
  label,
  icon,
  ...rest
}: CategoryPickerProps) => {
  return (
    <TouchableHighlight
      {...rest}
      onPress={onPress}
      underlayColor={colors.light}
    >
      <View
        style={{
          // paddingHorizontal: "7%",
          paddingVertical: 10,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 70,
            marginBottom: 20,
          }}
        >
          <View
            style={[
              styles.listItemModalItemView,
              {
                backgroundColor: backgroundColor,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={icon}
              size={35}
              color={colors.white}
            />
          </View>
          <AppText style={styles.listItemStyle}>{label}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryPicker;

const styles = StyleSheet.create({
  listItemModalItemView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemStyle: {
    marginTop: 10,
    textAlign: "center",
  },
});
