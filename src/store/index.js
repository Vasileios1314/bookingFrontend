import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import apartmentReducer from "./apartment/slice";

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    apartment: apartmentReducer,
  },
});

export default store;
