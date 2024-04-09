import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ViewProps,
  Dimensions,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
export type AppSafeAreaProps = ViewProps;

const AppSafeView = ({ children, style, ...rest }: AppSafeAreaProps) => {
  return (
    <SafeAreaView style={StyleSheet.compose(style, styles.container)}>
      <View {...rest} style={styles.containerView}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    width: Dimensions.get("window").width,
  },
  containerView: {
    flex: 1,
    maxWidth: Dimensions.get("window").width,
    paddingHorizontal: 20,
  },
});
