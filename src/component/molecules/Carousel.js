import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import NewsItem from "../atoms/NewsItem";
import RestaurantItem from "../atoms/RestaurantItem";

const cardItems = (compId, items) => {
  if (compId === 0) return <NewsItem item={items} />;
  if (compId === 1) return <RestaurantItem item={items} />;
  else return null;
};

const Carousel = ({ title, items, compId }) => {
  return (
    <View style={styles.offerContainer}>
      <Text style={styles.offerHeading}>{title}</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => cardItems(compId, item)}
        style={styles.imageContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, key) => key}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  offerContainer: {
    marginVertical: 20,
  },
  offerHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    gap: 20,
  },
  image: {},
});
