import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage }
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: composeWithDevTools(),
});

export default store;
