import Axios from "axios";
import { getApiLink } from "../imports/functions";

const axios = Axios.create({
  baseURL: getApiLink(),
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default axios;
