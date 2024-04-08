import { StyleSheet } from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginTop: 10,
  },
});
