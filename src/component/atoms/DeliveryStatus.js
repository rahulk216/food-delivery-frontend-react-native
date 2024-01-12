import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { deliveryStatusAndColor, paymentStatus } from "../../utils/utility";

const DeliveryStatus = ({ status, type }) => {
  const { statusText, color, textColor } =
    type === "DELIVERY"
      ? deliveryStatusAndColor(status)
      : paymentStatus(status);
  return (
    <View
      style={{
        backgroundColor: color,
        marginTop: 15,
        ...styles.deliveryStatusContainer,
      }}
    >
      <Text style={{ color: textColor }}>
        {`${type} STATUS`} :{" "}
        <Text style={{ fontWeight: "bold" }}>{statusText}</Text>
      </Text>
    </View>
  );
};

export default DeliveryStatus;

const styles = StyleSheet.create({
  deliveryStatusContainer: {
    padding: 15,
    borderRadius: 10,
  },
});
