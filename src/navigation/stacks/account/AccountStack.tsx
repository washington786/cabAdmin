import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../../screens/app/settings/Settings";
import Account from "../../../screens/app/settings/Account";
import UpdatesOnPrices from "../../../screens/app/settings/UpdatesOnPrices";

const AccountStacks = createStackNavigator();

const AccountStack = () => {
  return (
    <AccountStacks.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="settings"
    >
      <AccountStacks.Screen name="settings" component={Account} />
      <AccountStacks.Screen name="account" component={Settings} />
      <AccountStacks.Screen name="updates" component={UpdatesOnPrices} />
    </AccountStacks.Navigator>
  );
};

export default AccountStack;
