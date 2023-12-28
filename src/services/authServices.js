import { signInUrl, signUpUrl, BASE_URL } from "../utils/urlStrings";
import HTTP_REQUEST from "./httpRequest";

export const loginService = async ({ username, password }) => {
  const payload = { username, password };
  const url = `${BASE_URL}${signInUrl}`;
  const { data } = await HTTP_REQUEST.POST(url, payload);
  return data;
};
