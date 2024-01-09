import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";

const StepBar = ({ value, setScreen }) => {
  return (
    <View style={styles.stepBarContainer}>
      <TouchableOpacity onPress={() => setScreen("address")}>
        <Text
          style={
            value === "address"
              ? { color: colors.PRIMARY, fontWeight: "bold" }
              : { color: "#000" }
          }
        >
          ADDRESS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setScreen("placeOrder")}>
        <Text
          style={
            value === "payment"
              ? { color: colors.PRIMARY, fontWeight: "bold" }
              : { color: "#000" }
          }
        >
          PAYMENT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setScreen("placeOrder")}>
        <Text
          style={
            value === "placeOrder"
              ? { color: colors.PRIMARY, fontWeight: "bold" }
              : { color: "#000" }
          }
        >
          PLACE ORDER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepBar;

const styles = StyleSheet.create({
  stepBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
