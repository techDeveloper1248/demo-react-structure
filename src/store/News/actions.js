import api from "../api";
import axios from "axios";

const commonAxiosHeaders = {
  "Content-Type": "application/json"
};

const headerWithAuthToken = () => {
  return {
    "Content-Type": "application/json",
    "AUTH-TOKEN": localStorage.getItem("auth_token") || null
  };
};

// export const setCurrentUser = data => {
//   let user = data.data;
//   localStorage.setItem("auth_token", user.attributes.auth_token);
//   localStorage.setItem("type", user.type);
//   return {
//     type: "SET_CURRENT_USER",
//     payload: user
//   };
// };

export const setNews = data => {
  return {
    type: "SET_ALL_NEWS",
    payload: data
  };
};

export const getNews = payload => async dispatch => {
  axios.defaults.headers.common = commonAxiosHeaders;
  try {
    const { data } = await axios.get(api.getNews());
    console.log("data", data);
    dispatch(setNews(data));
  } catch (err) {
    return { data: err.response.data, isError: true };
  }
};
