import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// Combine your reducers (add them as needed)
const reducer = combineReducers({});

// Initial state (if needed)
const initialState = {};

// Configure store with reducer and preloaded state
const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: composeWithDevTools(), // Enable Redux DevTools
});

export default store;
