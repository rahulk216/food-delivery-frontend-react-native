import { addOrderUrl, BASE_URL, getOrderByIdUrl } from "../utils/urlStrings";
import HTTP_REQUEST from "./httpRequest";

export const addOrderService = async (body) => {
  const url = `${BASE_URL}${addOrderUrl}`;
  const response = await HTTP_REQUEST.POST(url, body);
  return response;
};

export const getOrderByIdService = async (id) => {
  const url = `${BASE_URL}${getOrderByIdUrl(id)}`;
  const response = await HTTP_REQUEST.GET(url);
  return response;
};
