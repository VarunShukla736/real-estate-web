import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CommonReducer from "./CommonReducer";
import PropertyReducer from "./PropertyReducer";
import UserReducer from "./UserReducer";
import SearchReducer from "./SearchReducer";

const appReducer = combineReducers({
  auth: AuthReducer,
  common: CommonReducer,
  user: UserReducer,
  property: PropertyReducer,
  search: SearchReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
