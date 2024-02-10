import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default appStore;
