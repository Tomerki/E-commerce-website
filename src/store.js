import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: composeWithDevTools(),
});

export default store;
