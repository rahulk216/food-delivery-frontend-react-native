import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../../utils/constants";

import { addAddress } from "../../store/slices/authSlice";
import { setOrderAddress } from "../../store/slices/orderSlice";

import { useDispatch } from "react-redux";

import InteractionButton from "../atoms/InteractionButton";
import Address from "../atoms/Address";

const AddressItem = ({ item, setSelectedAddress, setOrderAddressDispatch }) => {
  const setOrderAddress = () => {
    setOrderAddressDispatch({ ...item });
    setSelectedAddress(item);
  };

  return (
    <TouchableOpacity
      style={styles.addressItem}
      onPress={() => setOrderAddress()}
    >
      <Text style={{ fontWeight: "bold" }}>{item.location}</Text>
      <Text>{item.city}</Text>
      <Text>
        {item.state} {item.pincode}
      </Text>
    </TouchableOpacity>
  );
};

const AddressScreen = ({ addressList, user, isLoading, setScreen }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    location: "",
    city: "",
    state: "",
    pincode: null,
  });

  const dispatch = useDispatch();
  const addAddressDispatch = (obj) => dispatch(addAddress({ ...obj }));
  const setOrderAddressDispatch = (obj) =>
    dispatch(setOrderAddress({ ...obj }));

  useEffect(() => {
    if (addressList) {
      setSelectedAddress(addressList[0]);
      setOrderAddressDispatch(addressList[0]);
    }
  }, []);

  //functions
  const handleAddAddress = () => {
    if (
      newAddress.location === "" ||
      newAddress.city === "" ||
      newAddress.state === "" ||
      newAddress.pincode === null
    ) {
      return;
    }
    addAddressDispatch({ userId: user, ...newAddress });
    setNewAddress({
      location: "",
      city: "",
      state: "",
      pincode: null,
    });
  };

  return (
    <View style={styles.addressScreenContainer}>
      <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
        SELECT ADDRESS:
      </Text>
      {addressList.length > 0 ? (
        <>
          {isLoading ? (
            <View
              style={{
                height: 200,
                backgroundColor: colors.LIGHT_GREY,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="small" color={colors.PRIMARY} />
            </View>
          ) : (
            <FlatList
              data={addressList}
              renderItem={({ item }) => (
                <AddressItem
                  item={item}
                  setSelectedAddress={setSelectedAddress}
                  setOrderAddressDispatch={setOrderAddressDispatch}
                />
              )}
              showsVerticallScrollIndicator={false}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={true}
              style={styles.addressList}
            />
          )}
        </>
      ) : (
        <Text style={styles.noAddressContainer}>No Addresses added.</Text>
      )}
      <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
        SELECTED ADDRESS:{" "}
      </Text>
      <Address selectedAddress={selectedAddress} />
      <View style={styles.newAddressContainer}>
        <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
          ADD NEW ADDRESS:
        </Text>
        <TextInput
          placeholder="Location"
          style={styles.addressInput}
          value={newAddress.location}
          onChangeText={(text) =>
            setNewAddress({ ...newAddress, location: text })
          }
        />
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <TextInput
            placeholder="City"
            style={{
              width: "50%",
              ...styles.addressInput,
            }}
            value={newAddress.city}
            onChangeText={(text) =>
              setNewAddress({ ...newAddress, city: text })
            }
          />
          <TextInput
            placeholder="State"
            style={{
              width: "46%",
              ...styles.addressInput,
            }}
            value={newAddress.state}
            onChangeText={(text) =>
              setNewAddress({ ...newAddress, state: text })
            }
          />
        </View>
        <TextInput
          placeholder="Pincode"
          style={styles.addressInput}
          value={newAddress.pincode}
          onChangeText={(text) =>
            setNewAddress({ ...newAddress, pincode: text })
          }
        />
        <InteractionButton
          title="ADD ADDRESS"
          action={() => handleAddAddress()}
          styleProp1={styles.addAddressButton}
          styleProp2={{ color: "#fff", fontWeight: "bold" }}
          loading={isLoading}
        />
        <InteractionButton
          title="GO TO PLACE ORDER"
          action={() => setScreen("placeOrder")}
          styleProp1={{ marginBottom: 10, ...styles.addAddressButton }}
          styleProp2={{ color: "#fff", fontWeight: "bold" }}
        />
      </View>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  addressScreenContainer: {
    marginVertical: 20,
  },
  addressList: {
    padding: 10,
    backgroundColor: colors.LIGHT_GREY,
    height: 200,
    borderRadius: 10,
  },
  addressItem: {
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  currentAddressContainer: {
    borderWidth: 1,
    borderColor: colors.BORDER,
    padding: 10,
    borderRadius: 10,
  },
  newAddressContainer: {
    marginVertical: 10,
  },
  addressInput: {
    justifyContent: "center",
    alignItems: "stretch",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.BORDER,
    marginTop: 7,
    color: "#8F8F8F",
  },
  addAddressButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    marginTop: 10,
  },
  noAddressContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.BORDER,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.LIGHT_GREY,
  },
});
