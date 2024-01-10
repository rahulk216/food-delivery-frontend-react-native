import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";

const Address = ({ selectedAddress }) => {
  return (
    <View style={styles.currentAddressContainer}>
      <Text style={{ fontWeight: "bold" }}>{selectedAddress?.location}</Text>
      <Text>
        {selectedAddress?.city} {selectedAddress?.state}
      </Text>
      <Text>{selectedAddress?.pincode}</Text>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  currentAddressContainer: {
    borderWidth: 1,
    borderColor: colors.BORDER,
    padding: 10,
    borderRadius: 10,
  },
});
