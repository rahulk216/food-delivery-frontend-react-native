import { HTTP_METHOD } from "../util/constants";
import axios from "axios";

const HTTP_REQUEST = (function httpRequest() {
  axios.defaults.headers.put["Content-Type"] = "application/json";

  function getHeaders() {
    const authToken = 0; //localStorage.getItem("auth-token");
    const headers = {
      "Content-Type": "application/json",
    };
    if (authToken) {
      headers["Authorization"] = `Bearer ${authToken}`;
    }
    return headers;
  }

  async function GET(url) {
    const options = {
      url,
      method: HTTP_METHOD.GET,
      headers: getHeaders(),
    };

    const { data } = await axios(options);
    return data;
  }

  async function POST(url, data) {
    const options = {
      url,
      method: HTTP_METHOD.POST,
      data,
      headers: getHeaders(),
    };

    const res = await axios(options);
    return res;
  }

  async function PUT(url, data) {
    const options = {
      url,
      method: HTTP_METHOD.POST,
      data,
      headers: getHeaders(),
    };

    const res = await axios(options);
    return res;
  }

  async function DELETE(url, data) {
    const options = {
      url,
      method: HTTP_METHOD.DELETE,
      data,
      headers: getHeaders(),
    };

    const res = await axios(options);
    return res;
  }

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
})();

export default HTTP_REQUEST;
