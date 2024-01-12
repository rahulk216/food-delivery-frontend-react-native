import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.profileScreenContainer}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
        <Text>GO TO ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
