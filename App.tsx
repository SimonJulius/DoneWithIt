import { StyleSheet } from "react-native";

import MyAccountScreen from "./app/screens/MyAccountScreen";
// import ListingItem from "./app/components/lists/ListingItem";
// import AppSafeView from "./app/components/AppSafeView";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginTop: 10,
  },
});
