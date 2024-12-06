import axios from "axios";
import { getStorage, clearStorage } from "../../utils/storage";
import { APP_CONFIG } from "./apiConfig";
import { methodType } from "./apiEndPoints";

axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    const {
      response: { data, config },
      response,
    } = error;
    if (response.status === 401 && !config.url.search("login")) {
      clearStorage();
      return Promise.reject(data);
    }
    if (data) {
      return data;
    } else {
      return Promise.reject(error);
    }
  }
);

export const performRequest = async (
  method,
  url,
  data,
  login = true,
  formData = false
) => {
  url = url.replaceAll("#", "%23");
  const config = {
    method,
    url,
    baseURL: APP_CONFIG.API_BASE_URL,
  };

  if (
    method === methodType.PUT ||
    method === methodType.PATCH ||
    method === methodType.POST ||
    method === methodType.DELETE
  ) {
    config.data = data;
  }

  if (method === methodType.GET) {
    config.params = data;
  }
  if (formData) {
    config.headers = {
      "Content-Type": "multipart/form-data",
    };
  } else {
    config.headers = {
      "Content-Type": "application/json; charset=utf-8",
    };
  }

  if (login) {
    let { token } = getStorage("logged-in") || null;
    config.headers.Authorization = `Token ${token}`;
  }

  return axios.request(config);
};
