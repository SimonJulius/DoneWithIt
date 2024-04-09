import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../configs/colors";
import AppSafeView from "../components/AppSafeView";
import ListingItem from "../components/lists/ListingItem";
import ListMenuItem from "../components/lists/ListMenuItem";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ItemsArray = {
  id: number;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconViewBackground: string;
  message: string;
};
const ITEMS_ARRAY: ItemsArray[] = [
  {
    id: 1,
    iconName: "format-list-bulleted",
    iconViewBackground: colors.primary,
    message: "My Listings",
  },
  {
    id: 2,
    iconName: "email",
    iconViewBackground: colors.secondary,
    message: "My Messages",
  },
];
const logOut = {
  id: 3,
  iconName: "logout",
  iconViewBackground: colors.yellow,
};

const MyAccountScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <ListingItem
        style={styles.profileDetails}
        image={require("../assets/images/simon.jpg")}
        title={"Simon Julius"}
        subtitle={"simonjulius0511@gmail.com"}
      />
      <View>
        <ListMenuItem
          iconName={"format-list-bulleted"}
          iconViewBackground={colors.primary}
          size={20}
          style={styles.listings}
        >
          My Listings
        </ListMenuItem>
        <ListMenuItem
          style={styles.messages}
          iconName={"email"}
          size={20}
          iconViewBackground={colors.secondary}
        >
          My Messages
        </ListMenuItem>
        <ListMenuItem
          style={styles.logoutView}
          iconName={"logout"}
          iconViewBackground={colors.yellow}
          size={20}
        >
          Log Out
        </ListMenuItem>
      </View>

      <View style={styles.logoutView}></View>
    </AppSafeView>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  profileDetails: {
    backgroundColor: colors.white,
    marginTop: 20,
  },

  messages: {
    marginTop: 1,
  },
  listings: {
    marginTop: 40,
  },
  logoutView: {
    marginTop: 40,
  },
});
