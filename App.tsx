import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthNavigator from "./app/navigation/AuthNavigator";
import { AppNavigationTheme } from "./app/navigation/NavigationTheme";
import HomeNavigator from "./app/navigation/HomeNavigator";

export default function App() {
  return (
    <NavigationContainer theme={AppNavigationTheme}>
      <GestureHandlerRootView>
        {/* <AuthNavigator /> */}
        <HomeNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginTop: 10,
  },
});
