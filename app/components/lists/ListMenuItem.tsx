import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AppText from "../AppText";
import colors from "../../configs/colors";
import AppCircularIcon from "../AppCircularIcon";

type ListItemProps = ViewProps & {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconViewBackground: string;
  size: number;
  onPress?: () => void;
};

const ListMenuItem = ({
  iconName,
  iconViewBackground,
  size,
  style,
  onPress,
  children,
}: ListItemProps) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={StyleSheet.compose(styles.container, style)}>
        <AppCircularIcon
          size={size}
          iconViewBackground={iconViewBackground}
          iconName={iconName}
        />
        <View>
          <AppText style={styles.textContent}>{children}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListMenuItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  textContent: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.black,
  },
});
