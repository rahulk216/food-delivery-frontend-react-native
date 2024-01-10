import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils/constants";

import { useDispatch, useSelector } from "react-redux";

import MenuItem from "../atoms/MenuItem";
import Address from "../atoms/Address";
import InteractionButton from "../atoms/InteractionButton";

const PaymentSelection = ({ paymentOption, setPaymentOption }) => {
  return (
    <View styles={styles.paymentContainer}>
      <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
        SELECT PAYMENT OPTION:
      </Text>
      <View>
        {["Online", "COD"].map((option) => (
          <View style={styles.paymentOption}>
            <TouchableOpacity
              style={styles.outer}
              onPress={() => setPaymentOption(option)}
            >
              {option === paymentOption && <View style={styles.inner} />}
            </TouchableOpacity>
            <Text>{option}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const PlaceOrderScreen = ({}) => {
  const [paymentOption, setPaymentOption] = useState("COD");

  //use selectors
  const { order, payment, address } = useSelector(
    (state) => state.orderDetails
  );

  return (
    <View style={styles.placeOrderContainer}>
      <PaymentSelection
        paymentOption={paymentOption}
        setPaymentOption={setPaymentOption}
      />
      <View>
        <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
          SPECIAL INSTRUCTIONS:
        </Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.specialInstructions}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginVertical: 10, fontWeight: "bold" }}>ADDRESS:</Text>
        <Address selectedAddress={address} />
      </View>
      <View style={styles.orderList}>
        <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
          ORDER LIST:
        </Text>
        <FlatList
          data={order?.items}
          renderItem={({ item }) => (
            <MenuItem item={item} source="placeorder" />
          )}
          keyExtractor={(item) => item.id}
          style={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.submitContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>TOTAL PRICE:</Text>
          <Text>&#8377; {order.totalPrice}</Text>
        </View>
        <InteractionButton
          title="PLACE ORDER"
          styleProp1={styles.placeOrderButton}
          styleProp2={{ color: "#fff", fontWeight: "bold" }}
          action={() => {}}
        />
      </View>
    </View>
  );
};

export default PlaceOrderScreen;

const styles = StyleSheet.create({
  placeOrderContainer: {
    height: "100%",
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  outer: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: colors.SECONDARY_TEXT,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    height: 12,
    width: 12,
    borderRadius: 15,
    backgroundColor: colors.PRIMARY,
  },
  paymentOption: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
  },
  orderList: {
    height: 250,
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  specialInstructions: {
    justifyContent: "center",
    alignItems: "stretch",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#8F8F8F",
    marginTop: 7,
    color: "#8F8F8F",
  },
  submitContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.BORDER,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  placeOrderButton: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
  },
});
