import axios from "axios";
import toast from "react-hot-toast";

const BASEURL = "/api";
export const axiosBase = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  withCredentials: true,
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
      toast.error("Session expired");
    }
    return Promise.reject(error);
  }
);

export default axiosBase;
