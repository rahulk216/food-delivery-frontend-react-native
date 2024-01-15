import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import React from "react";
import { colors } from "../../utils/constants";
import Chevron from "../../assets/Chevron";

const profileContent = [
  { name: "MY PROFILE", img: "", subTitle: "Edit Profile" },
  { name: "MY ORDERS", img: "", subTitle: "Orders List" },
  {
    name: "REFER FRIENDS",
    img: "",
    subTitle: "Refer friends and earn upto Rs2500 Cash back",
  },
  { name: "ADDRESSES", img: "", subTitle: "Edit & add new address" },
  { name: "HELP", img: "", subTitle: "FAQ's & Links" },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.profileScreenContainer}>
        {/* <Text>ProfileScreen</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Order")}>
          <Text>GO TO ORDER</Text>
        </TouchableOpacity> */}
        <View style={styles.displayImageContainer}>
          <View style={styles.imageContainer}>
            <Animated.Image
              source={{
                uri: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: "100%", height: "100%", borderRadius: 90 }}
            />
          </View>
        </View>
        <View style={{ marginTop: 60, ...styles.profileOptionsContainer }}>
          {profileContent?.map((value) => (
            <View style={styles.profileItemContainer}>
              <View style={styles.profileItem}>
                <Text style={{ fontWeight: "bold" }}>{value.name}</Text>
                <Text style={{ fontSize: 12, color: colors.SECONDARY_TEXT }}>
                  {value.subTitle}
                </Text>
              </View>
              <Chevron />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileScreenContainer: {
    backgroundColor: "#fff",
    height: "100%",
  },

  displayImageContainer: {
    height: "30%",
    backgroundColor: colors.PRIMARY,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    position: "relative",
  },

  imageContainer: {
    height: 120,
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 70,
    borderWidth: 1,
    borderColor: colors.SECONDARY_TEXT,
    position: "absolute",
    top: "65%",
    left: 130,
  },
  profileOptionsContainer: {
    paddingHorizontal: 20,
  },
  profileItem: {
    paddingVertical: 10,
  },
  profileItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: colors.BORDER,
    width: "100%",
  },
});
