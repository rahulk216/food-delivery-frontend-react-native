export const BASE_URL = `https://food-delivery-backend-a92k.onrender.com`;

//http://localhost:3001
//https://food-delivery-backend-a92k.onrender.com

//auth
export const signInUrl = "/auth/signin";
export const signUpUrl = "/auth/signup";
export const getUserUrl = "/auth/getuser";
export const addAddressUrl = "/user/address";

//menu
export const getAllProductsUrl = "/menu";
export const getAllRestaurantsUrl = "/menu/restaurant";

//order
export const addOrderUrl = "/order";
export const getOrderByIdUrl = (id) => `/order/${id}`;
