import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, CartScreen, WishListScreen } from "../";
import { colors } from "../utils/constants";

// icons
import Cart from "../assets/bottomNavbarAssets/Cart";
import Home from "../assets/bottomNavbarAssets/Home";
import Profile from "../assets/bottomNavbarAssets/Profile";
import WishList from "../assets/bottomNavbarAssets/WishList";
import SearchScreen from "../component/organisms/SearchScreen";
import { View, StyleSheet } from "react-native";

//redux
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  const { items } = useSelector((state) => state.cartDetail);
  return (
    <BottomTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          backgroundColor: colors.PRIMARY,
          color: "#fff",
          height: 80,
          ...styles.shadow,
        },
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({}) => (
            <View style={styles.cartIconContainer}>
              {items.length > 0 && (
                <View style={styles.cartFilledIndicator}></View>
              )}
              <Cart />
            </View>
          ),
          headerShown: false,
        }}
        component={CartScreen}
      />
      <BottomTab.Screen
        name="Home"
        options={{
          tabBarIcon: ({}) => (
            <View>
              <Home />
            </View>
          ),
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Wishlist"
        options={{
          tabBarIcon: ({}) => (
            <View>
              <WishList />
            </View>
          ),
          headerShown: false,
        }}
        component={WishListScreen}
      />
      <BottomTab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({}) => (
            <View>
              <Profile />
            </View>
          ),
          headerShown: false,
        }}
        component={ProfileScreen}
      />
      <BottomTab.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        component={SearchScreen}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5D50",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 5,
  },
  cartIconContainer: {
    position: "relative",
    elevation: 5,
  },
  cartFilledIndicator: {
    position: "absolute",
    height: 10,
    backgroundColor: "red",
    width: 10,
    borderRadius: 50,
    right: 0,
    bottom: 17,
    left: 17,
    elevation: 10,
  },
});

export default TabRoutes;
