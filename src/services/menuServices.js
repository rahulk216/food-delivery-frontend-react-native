import { getAllProductsUrl, BASE_URL } from "../utils/urlStrings";
import HTTP_REQUEST from "./httpRequest";

export const getAllProducts = async () => {
  const url = `${BASE_URL}${getAllProductsUrl}`;
  const { data } = await HTTP_REQUEST.GET(url);
  return data;
};
