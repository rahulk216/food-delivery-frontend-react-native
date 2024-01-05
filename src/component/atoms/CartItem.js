import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React from "react";

//component
import CartButton from "./CartButton";
import { colors } from "../../utils/constants";
import img from "../../assets/tempAssets/drawer-pics/2.jpg";

const CartItem = ({ item }) => {
  return (
    <View style={styles.cartItemContainer}>
      <Animated.Image
        source={img}
        style={{
          width: 150,
          height: 90,
          borderRadius: 10,
        }}
      />
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {item.menu_name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 5,
            color: colors.SECONDARY_TEXT,
          }}
        >
          &#8377; {item.menu_price}
        </Text>
        <CartButton item={item} />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: colors.BORDER,
  },
});
