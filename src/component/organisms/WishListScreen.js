import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WishListScreen = () => {
  return (
    <View style={styles.wishListScreenContainer}>
      <Text>WishListScreen</Text>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  wishListScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
