import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import { clearCart, addDiscount } from "../../store/slices/cartSlice";
import { setOrder } from "../../store/slices/orderSlice";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../atoms/CartItem";
import { colors } from "../../utils/constants";

const couponData = [
  {
    id: "FOOD123",
    discount: 10,
  },
  {
    id: "FOOD456",
    discount: 20,
  },
  {
    id: "FOOD789",
    discount: 30,
  },
];

const handleDiscountValue = ({ discountCoupon, addDiscountDispatch }) => {
  const findDiscount = couponData.find(
    (coupon) => coupon.id === discountCoupon
  );
  if (findDiscount) addDiscountDispatch(findDiscount.discount);
  else addDiscountDispatch(0);
};

const handleCheckout = ({ navigation, setOrderDispatch, order }) => {
  setOrderDispatch(order);
  navigation.navigate("Checkout");
};

const CartScreen = ({ navigation }) => {
  const [discountCoupon, setDiscountCoupon] = useState("");

  const dispatch = useDispatch();
  const clearCartDispatch = () => dispatch(clearCart());
  const addDiscountDispatch = (obj) => dispatch(addDiscount(obj));
  const setOrderDispatch = (obj) => dispatch(setOrder(obj));

  const { items, totalPrice, discount } = useSelector(
    (state) => state.cartDetail
  );

  return (
    <SafeAreaView>
      <View style={styles.wishListScreenContainer}>
        <View style={styles.headingContainer}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000" }}>
            Food Cart
          </Text>
        </View>
        <TouchableOpacity onPress={() => clearCartDispatch()}>
          <Text
            style={{ color: "red", fontWeight: "bold", marginVertical: 10 }}
          >
            Clear Cart
          </Text>
        </TouchableOpacity>
        {items?.length > 0 ? (
          <>
            <FlatList
              data={items}
              renderItem={({ item }) => <CartItem item={item} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              style={styles.productlist}
            />
            <View style={styles.couponContainer}>
              <TextInput
                style={styles.couponInput}
                onChangeText={(text) => setDiscountCoupon(text)}
              />
              <TouchableOpacity
                style={styles.couponButton}
                onPress={() =>
                  handleDiscountValue({
                    discountCoupon,
                    addDiscountDispatch,
                  })
                }
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Add Coupon
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.calculationContainer}>
              <View style={styles.calculationBox}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Items Count:{" "}
                </Text>
                <Text>{items.length}</Text>
              </View>
              <View style={styles.calculationBox}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Discount:{" "}
                </Text>
                <Text>{discount}%</Text>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  paddingVertical: 10,
                  borderColor: colors.BORDER,
                  ...styles.calculationBox,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total:</Text>
                <Text>&#8377; {totalPrice}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.totalPriceContainer}
              onPress={() =>
                handleCheckout({
                  navigation,
                  setOrderDispatch,
                  order: { items, totalPrice },
                })
              }
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  color: "#fff",
                }}
              >
                Proceed To Checkout
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.cartEmptyContainer}>
            <Text>No Items in Cart</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  wishListScreenContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
    height: "100%",
  },
  headingContainer: {
    flexDirection: "row",
  },
  productlist: {},
  cartEmptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  totalPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    marginVertical: 20,
    paddingVertical: 15,
  },
  couponContainer: {
    marginVertical: 20,
  },
  couponInput: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: colors.BORDER,
  },
  couponButton: {
    position: "absolute",
    right: 5,
    top: 0,
    bottom: 0,
    marginVertical: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
  },
  calculationBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 10,
  },
});
