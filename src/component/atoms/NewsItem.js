import { StyleSheet, Image, Animated } from "react-native";
import React from "react";

const NewsItem = ({ item }) => {
  return (
    <>
      <Animated.Image
        source={item}
        style={{
          width: 200,
          height: 100,
          flex: 1,
          borderRadius: 10,
          marginRight: 10,
          gap: 20,
          marginTop: 10,
        }}
      />
    </>
  );
};

export default NewsItem;

const styles = StyleSheet.create({});
