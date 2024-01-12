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

export const deliveryStatusAndColor = (status) => {
  switch (status) {
    case "PENDING":
      return { statusText: "PENDING", color: "#FFE082", textColor: "#00000" };
    case "CONFIRMED":
      return {
        statusText: "CONFIRMED",
        color: "#2ecc71",
        textColor: "#FFFFFF",
      };
    case "PREPARING":
      return {
        statusText: "PREPARING",
        color: "#FFA500",
        textColor: "#FFFFFF",
      };
    case "OUT_FOR_DELIVERY":
      return {
        statusText: "OUT FOR DELIVERY",
        color: "#2ecc71",
        textColor: "#FFFFFF",
      };
    case "DELAYED":
      return { statusText: "DELAYED", color: "#FF0000", textColor: "#FFFFFF" };
    case "DELIVERED":
      return {
        statusText: "DELIVERED",
        color: "#C5E1A5",
        textColor: "#388E3C",
      };
    case "CANCEL":
      return { statusText: "CANCEL", color: "#FF0000", textColor: "#FFFFFF" };
    case "RETURNED":
      return { statusText: "RETURNED", color: "#8B0000", textColor: "#FFFFFF" };
    case "ON_HOLD":
      return { statusText: "ON HOLD", color: "#808080", textColor: "#FFFFFF" };
    case "COMPLETED":
      return {
        statusText: "COMPLETED",
        color: "#008000",
        textColor: "#FFFFFF",
      };
    default:
      return {
        statusText: "DELIVERED",
        color: "#008000",
        textColor: "#FFFFFF",
      };
  }
};

export const paymentStatus = (status) => {
  switch (status) {
    case "COD_PENDING":
      return {
        statusText: "PAYMENT IS PENDING",
        color: "#FFE082",
        textColor: "#00000",
      };
    case "COD_COMPLETE":
      return {
        statusText: "PAYMENT IS COMPLETE",
        color: "#008000",
        textColor: "#FFFFFF",
      };
    default:
      return {
        statusText: "ISSUE WITH SERVER",
        color: "#008000",
        textColor: "#FFFFFF",
      };
  }
};
