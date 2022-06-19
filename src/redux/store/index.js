import { configureStore } from "@reduxjs/toolkit";
// this will set up the store
import mainReducer from "../reducers";

const store = configureStore({
  reducer: mainReducer
});

export default store;
