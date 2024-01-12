import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

import StepBar from "../atoms/StepBar";

import { useSelector } from "react-redux";
import { colors } from "../../utils/constants";

//components
import AddressScreen from "../molecules/AddressScreen";
import PlaceOrderScreen from "../molecules/PlaceOrderScreen";

const CheckoutScreen = ({ navigation }) => {
  const [screen, setScreen] = useState("address");

  useEffect(() => {
    setScreen("address");
  }, []);

  const { userDetails, isLoading } = useSelector((state) => state.loginDetails);

  return (
    <SafeAreaView>
      <ScrollView>
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
            <PlaceOrderScreen navigation={navigation} />
          )}
        </View>
      </ScrollView>
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
