import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";

const RestaurantItem = ({ item }) => {
  return (
    <View style={styles.restaurantItemContainer}>
      <Animated.Image
        source={{
          uri: item.image,
        }}
        style={{
          width: 150,
          height: 100,
          borderRadius: 10,
        }}
      />
      <View style={styles.restaurantNameContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>{item.restaurant_name}</Text>
          <Text>{item.city}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantItemContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: colors.BORDER,
  },
  restaurantNameContainer: {
    marginTop: 10,
  },
});
