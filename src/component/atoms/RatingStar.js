import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Star from "../../assets/star";

const renderStars = (value) => {
  let stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<Star />);
  }
  return stars;
};

const RatingStar = ({ rating = 1 }) => {
  if (!rating) return null;
  return <View style={styles.ratingContainer}>{renderStars(rating)}</View>;
};

export default RatingStar;

const styles = StyleSheet.create({
  ratingContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
