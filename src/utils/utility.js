import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUser = async () => {
  const token = await AsyncStorage.getItem("accessToken");
  return token;
};

export const setUser = async ({ accessToken }) => {
  const response = await AsyncStorage.setItem("accessToken", accessToken);
  return response;
};
