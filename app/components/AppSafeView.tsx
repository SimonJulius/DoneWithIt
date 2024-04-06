import { StyleSheet, Text, View, SafeAreaView, ViewProps } from "react-native";
import React from "react";
import Constants from "expo-constants";
type AppSafeAreaProps = ViewProps;
const AppSafeView = ({ children, style }: AppSafeAreaProps) => {
  return (
    <SafeAreaView style={StyleSheet.compose(style, styles.container)}>
      <View style={styles.containerView}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  containerView: {
    paddingHorizontal: 20,
  },
});
