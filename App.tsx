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

export default function App() {
  return <ListingScreen></ListingScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardSection: {
    height: "auto",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 100 : 40,
  },
});
