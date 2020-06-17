import { combineReducers } from "redux";
import News from "./News/reducers";

const appReducer = combineReducers({
  News
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
