import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React from "react";

const Item = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Animated.Image
        source={item.img}
        style={{
          flex: 1,
          height: 50,
          width: 50,
          marginRight: 10,
          aspectRatio: 1,
        }}
      />
      <Text>{item.name}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
