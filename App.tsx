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
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import ListingCard from "./app/components/cards/ListingCard";
import colors from "./app/configs/colors";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ListingItem from "./app/components/items/ListingItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ViewImageScreen />
    </View>
  );
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
