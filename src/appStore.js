import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";
import MovieReducer from "./Reducers/MovieReducer";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MovieReducer,
  },
});

export default appStore;
