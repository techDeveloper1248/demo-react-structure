import { combineReducers } from "redux";

const newsDefault = {
  news: []
};

const currentNewsReducer = (state = newsDefault, action) => {
  switch (action.type) {
    case "SET_ALL_NEWS":
      return { news: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  current: currentNewsReducer
});
