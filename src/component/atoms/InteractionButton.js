import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

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
        <Text style={styleProp2}>Loading</Text>
      ) : (
        <Text style={styleProp2}>{title}</Text>
      )}
    </Pressable>
  );
};

export default InteractionButton;

const styles = StyleSheet.create({});
