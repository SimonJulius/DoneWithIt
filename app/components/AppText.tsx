import { Platform, StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";

type AppTextProps = TextProps;

const AppText = ({ style, children }: AppTextProps) => {
  const compositStyle = StyleSheet.compose(style, styles.textStyle);
  return (
    <View>
      <Text style={compositStyle}>{children}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  textStyle: {
    // fontFamily: "Poppins-Regular",
  },
});
