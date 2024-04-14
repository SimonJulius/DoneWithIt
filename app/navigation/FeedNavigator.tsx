import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import Routes from "../routes/route-constants";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.LISTING} component={ListingScreen} />
      <Stack.Screen
        name={Routes.LISTING_DETAILS}
        component={ListingDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
