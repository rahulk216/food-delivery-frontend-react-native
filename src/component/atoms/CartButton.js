import { StyleSheet, Text, View } from "react-native";
import React from "react";

import InteractionButton from "./InteractionButton";
import { colors } from "../../utils/constants";

import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const addToCartDispatch = (obj) => dispatch(addToCart({ ...obj }));
  const removeFromCartDispatch = (obj) => dispatch(removeFromCart({ ...obj }));

  return (
    <View style={styles.cartButtonContainer}>
      <InteractionButton
        title="+"
        styleProp1={styles.buttonStyle}
        styleProp2={styles.buttonText}
        action={() => addToCartDispatch(item)}
      />
      <Text style={styles.quantity}>{item.qty}</Text>
      <InteractionButton
        title="-"
        styleProp1={styles.buttonStyle}
        styleProp2={styles.buttonText}
        action={() => removeFromCartDispatch(item)}
      />
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  cartButtonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: colors.PRIMARY,
    padding: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  quantity: {
    fontSize: 20,
  },
});
