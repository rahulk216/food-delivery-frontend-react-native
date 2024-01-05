import {
  getAllProductsUrl,
  BASE_URL,
  getAllRestaurantsUrl,
} from "../utils/urlStrings";
import HTTP_REQUEST from "./httpRequest";

export const getAllProductsService = async () => {
  const url = `${BASE_URL}${getAllProductsUrl}`;
  const response = await HTTP_REQUEST.GET(url);
  return response;
};

export const getAllRestaurants = async () => {
  const url = `${BASE_URL}${getAllRestaurantsUrl}`;
  const response = await HTTP_REQUEST.GET(url);
  return response;
};
