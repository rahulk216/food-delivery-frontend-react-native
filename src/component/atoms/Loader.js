import { View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = ({ size, styleProp, color }) => {
  return (
    <View style={styleProp}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
