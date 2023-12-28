import { Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import Loader from "../../assets/loader";

const InteractionButton = ({
  title,
  action,
  styleProp1,
  styleProp2,
  loading,
}) => {
  return (
    <Pressable style={styleProp1} onPress={() => action()}>
      {loading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <Text style={styleProp2}>{title}</Text>
      )}
    </Pressable>
  );
};

export default InteractionButton;
