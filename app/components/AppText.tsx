import { Platform, StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";

export type AppTextProps = TextProps;

const AppText = ({ style, children, ...rest }: AppTextProps) => {
  const compositeStyle = StyleSheet.compose(style, styles.textStyle);
  return (
    <View>
      <Text {...rest} style={compositeStyle}>
        {children}
      </Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  textStyle: {
    // fontFamily: "Poppins-Regular",
  },
});
