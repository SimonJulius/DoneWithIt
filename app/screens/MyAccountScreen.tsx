import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../configs/colors";
import AppSafeView from "../components/AppSafeView";
import ListingItem from "../components/lists/ListingItem";
import ListMenuItem from "../components/lists/ListMenuItem";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountNavigatorParams } from "../navigation/types";
import Routes from "../routes/route-constants";

interface MyAccountProps {
  navigation: NativeStackNavigationProp<AccountNavigatorParams>;
}

const MyAccountScreen = ({ navigation }: MyAccountProps) => {
  const handleMessageClick = () => {
    navigation.navigate(Routes.MESSAGES);
  };
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
          onPress={handleMessageClick}
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
