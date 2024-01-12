import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../../utils/constants";

import { useDispatch, useSelector } from "react-redux";

import MenuItem from "../atoms/MenuItem";
import Address from "../atoms/Address";
import InteractionButton from "../atoms/InteractionButton";

//service
import {
  addOrder,
  clearOrder,
  setOrderId,
} from "../../store/slices/orderSlice";
import { clearCart } from "../../store/slices/cartSlice";

const PaymentSelection = ({ paymentOption, setPaymentOption }) => {
  return (
    <View styles={styles.paymentContainer}>
      <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
        SELECT PAYMENT OPTION:
      </Text>
      <View>
        {["Online", "COD"].map((option, index) => (
          <View key={index} style={styles.paymentOption}>
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

const PlaceOrderScreen = ({ navigation }) => {
  const [paymentOption, setPaymentOption] = useState("COD");

  //dispatch
  const dispatch = useDispatch();
  const addOrderDataDispatch = (obj) => dispatch(addOrder({ ...obj }));
  const clearOrderDispatch = () => dispatch(clearOrder());
  const clearCartDispatch = () => dispatch(clearCart());
  const setOrderIdDispatch = (obj) => dispatch(setOrderId({ ...obj }));

  //use selectors
  const { cartOrder, address, error, order } = useSelector(
    (state) => state.orderDetails
  );
  const { userDetails } = useSelector((state) => state.loginDetails);

  useEffect(() => {
    setOrderIdDispatch({ id: order?.id });
  }, [order]);

  const handleCreateNewOrder = async () => {
    try {
      const payload = {
        userId: userDetails.id,
        order_total: cartOrder?.totalPrice,
        order_items: JSON.stringify(cartOrder.items),
        payment_id: null,
        order_type: paymentOption === "COD" ? "CASH_ON_DELIVERY" : "ONLINE",
        address: address,
        delivery_status: "PENDING",
      };
      addOrderDataDispatch(payload);
      if (error) {
        return;
      }
      clearOrderDispatch();
      clearCartDispatch();
      navigation.navigate("Order");
    } catch (error) {}
  };
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
          data={cartOrder?.items}
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
          <Text>&#8377; {cartOrder?.totalPrice}</Text>
        </View>
        <InteractionButton
          title="PLACE ORDER"
          styleProp1={styles.placeOrderButton}
          styleProp2={{ color: "#fff", fontWeight: "bold" }}
          action={() => handleCreateNewOrder()}
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
