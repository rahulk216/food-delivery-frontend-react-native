import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { colors } from "../../utils/constants";
import Address from "../atoms/Address";
import MenuItem from "../atoms/MenuItem";
import DeliveryStatus from "../atoms/DeliveryStatus";

import { getOrderById } from "../../store/slices/orderSlice";
import Loader from "../atoms/Loader";

const renderLoader = () => {
  return (
    <Loader
      styleProp={{
        alignitems: "center",
        justifyContent: "center",
        height: "100%",
      }}
      size="large"
      color={colors.PRIMARY}
    />
  );
};

const OrderScreen = () => {
  const { order, isLoading, error, selectedOrderId } = useSelector(
    (state) => state.orderDetails
  );

  const dispatch = useDispatch();
  const getOrderByIdDispatch = (id) => dispatch(getOrderById(id));

  useEffect(() => {
    if (selectedOrderId) getOrderByIdDispatch(selectedOrderId);
  }, [selectedOrderId]);
  return (
    <SafeAreaView>
      {error && order ? (
        <Text>Cant Find This Order</Text>
      ) : isLoading ? (
        renderLoader()
      ) : (
        <View style={styles.orderScreenContainer}>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 16 }}>
              {`Order Number :`}
              <Text style={{ fontWeight: "bold" }}>{` ORDER${order?.id}`}</Text>
            </Text>
            <Text style={{ fontSize: 16, marginTop: 5 }}>
              Name:
              <Text style={{ fontWeight: "bold" }}> {order?.user?.name}</Text>
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            ADDRESS:
          </Text>
          <Address selectedAddress={order?.address} />
          <DeliveryStatus status={order?.delivery_status} type="DELIVERY" />
          <View style={styles.orderList}>
            <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
              ORDER LIST:
            </Text>
            <FlatList
              data={JSON.parse(order?.order_items)}
              renderItem={({ item }) => (
                <MenuItem item={item} source="placeorder" />
              )}
              keyExtractor={(item) => item.id}
              style={styles.productList}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <DeliveryStatus
            status={order?.payment?.payment_status}
            type="PAYMENT"
          />
          <View style={styles.totalContainer}>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                color: colors.PRIMARY,
              }}
            >
              ORDER TOTAL:
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                &#8377;{order?.order_total}/-
              </Text>
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  orderScreenContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
    height: "100%",
  },
  productList: {
    height: 250,
  },
  orderList: {
    height: 250,
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
  },
  totalContainer: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    borderRadius: 10,
    marginVertical: 15,
    padding: 10,
  },
  nameContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.BORDER,
    padding: 10,
    borderRadius: 10,
  },
});
