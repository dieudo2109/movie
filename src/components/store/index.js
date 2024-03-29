import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
