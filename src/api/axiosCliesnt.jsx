import axios from "axios"
import { logOutRedirectCall } from "../util/redirectCalls"

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "accept-language": "en",
  },
})

axiosClient.interceptors.request.use(
  function (config) {
    if (
      localStorage.getItem("token") !== undefined ||
      localStorage.getItem("token") !== null
    ) {
      config.headers["x-token"] = localStorage.getItem("token")
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response && error.response.status === 500) {
      logOutRedirectCall()
    }
    return Promise.reject(error)
  }
)

// axiosClient.defaults.headers.common["Authorization"] =
//   localStorage.getItem("token");
// axiosClient.defaults.headers.common["accept-language"] = "en";

export { axiosClient }
