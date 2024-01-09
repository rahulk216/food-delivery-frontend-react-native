import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";

import StepBar from "../atoms/StepBar";

import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../utils/constants";

//components
import AddressScreen from "../molecules/AddressScreen";

const PlaceOrderScreen = () => {
  return (
    <View>
      <Text>PlaceOrderScreen</Text>
    </View>
  );
};

const CheckoutScreen = () => {
  const [screen, setScreen] = useState("address");

  const { userDetails, isLoading } = useSelector((state) => state.loginDetails);

  return (
    <SafeAreaView>
      <View style={styles.checkoutScreenContainer}>
        <StepBar value={screen} setScreen={setScreen} />
        {screen === "address" ? (
          <AddressScreen
            addressList={userDetails?.address}
            user={userDetails?.id}
            isLoading={isLoading}
            setScreen={setScreen}
          />
        ) : (
          <PlaceOrderScreen />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  checkoutScreenContainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: "100%",
  },
  addressScreenContainer: {
    marginVertical: 20,
  },
  addressList: {
    marginVertical: 30,
    padding: 10,
    backgroundColor: colors.LIGHT_GREY,
    height: 200,
  },
  addressItem: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 10,
  },
});
