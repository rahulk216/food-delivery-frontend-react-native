import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen } from "../";

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName="Home"
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
