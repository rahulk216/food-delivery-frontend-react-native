import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUser = async () => {
  const token = await AsyncStorage.getItem("accessToken");
  return token;
};

export const setUser = async ({ accessToken }) => {
  const response = await AsyncStorage.setItem("accessToken", accessToken);
  return response;
};

export const calculateTotalPrice = (arr, discount = 0) => {
  let sum = arr.reduce((acc, val) => acc + Number(val.menu_price) * val.qty, 0);
  let discountValue = 0;
  if (discount) {
    discountValue = (sum * discount) / 100;
    sum = sum - discountValue;
  }

  return sum;
};
