import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CartScreen = () => {
  return (
    <View style={styles.wishListScreenContainer}>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  wishListScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
