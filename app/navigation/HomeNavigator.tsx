import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListEditTabButton from "./ListEditTabButton";
import Routes from "../routes/route-constants";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={Routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name={"home"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.LIST_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <ListEditTabButton
              onPress={() => {
                navigation.navigate(Routes.LIST_EDIT);
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name={Routes.ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={"account"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
