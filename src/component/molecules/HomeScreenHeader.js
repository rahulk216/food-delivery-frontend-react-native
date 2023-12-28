import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";

//icon
import Bell from "../../assets/bell";
import { useDispatch, useSelector } from "react-redux";

const HomeScreenHeader = ({ logout, userDetails }) => {
  //dispatches
  const dispatch = useDispatch();
  const logoutDispatch = () => dispatch(logout());
  return (
    <View style={styles.homeHeaderContainer}>
      <View style={styles.leftContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{ width: 60, height: 60, borderRadius: "50%" }}
        />
        <View>
          <Text style={styles.helloText}>{`Hello, ${userDetails.name}`}</Text>
          <Text style={styles.helloSubHeading}>
            What do you want to eat today?
          </Text>
        </View>
      </View>

      <View style={styles.bellContainer}>
        <Pressable onPress={() => logoutDispatch()}>
          <Bell style={styles.bellIcon} />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  homeHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  helloText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
  helloSubHeading: {
    color: colors.SECONDARY_TEXT,
    marginTop: 5,
  },
  bellContainer: {
    alignItems: "center",
  },
  bellIcon: {
    borderWidth: 1,
    borderColor: "#8F8F8F",
    borderRadius: "50%",
    padding: 5,
  },
});
