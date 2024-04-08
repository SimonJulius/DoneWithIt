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
import AppTextInput from "./app/components/forms/AppTextInput";
import { useState } from "react";
import AppText from "./app/components/AppText";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const data = ["snjf", "ekfj"];
  return <LoginScreen></LoginScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginTop: 10,
  },
});
