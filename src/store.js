import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./reducers/sampleSlice";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});

export default store;
