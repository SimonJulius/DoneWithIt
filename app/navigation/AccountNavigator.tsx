import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import Routes from "../routes/route-constants";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.ACCOUNT} component={MyAccountScreen} />
      <Stack.Screen name={Routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
