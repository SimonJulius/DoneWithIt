import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import ListMenuItem from "./app/components/items/ListMenuItem";
import colors from "./app/configs/colors";
import AppSafeView from "./app/components/AppSafeView";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import { useState } from "react";
import AppText from "./app/components/AppText";

export default function App() {
  const [textInput, setTextInput] = useState("");
  return (
    <AppSafeView>
      <View>
        <AppPicker></AppPicker>
        <AppTextInput
          iconSize={20}
          leftIconName="form-textbox-password"
          rightIconName="key"
          placeholder="Password"
          style={styles.textInput}
          onChangeText={(text) => setTextInput(text)}
        />
      </View>

      <AppText>{textInput}</AppText>
    </AppSafeView>
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
