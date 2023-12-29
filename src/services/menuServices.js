import { getAllProductsUrl, BASE_URL } from "../utils/urlStrings";
import HTTP_REQUEST from "./httpRequest";

export const getAllProductsService = async () => {
  const url = `${BASE_URL}${getAllProductsUrl}`;
  const response = await HTTP_REQUEST.GET(url);
  return response;
};
