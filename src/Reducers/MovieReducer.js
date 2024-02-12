import { createSlice } from "@reduxjs/toolkit";

const moviesReducer = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesReducer.actions;

export default moviesReducer.reducer;
