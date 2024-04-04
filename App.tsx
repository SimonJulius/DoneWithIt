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

export default function App() {
  return (
    <View style={styles.container}>
      <ListingDetailScreen
        image={require("./app/assets/images/jacket.jpg")}
        title="Red jacket for sale!"
        subtitle="100$"
      ></ListingDetailScreen>
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
