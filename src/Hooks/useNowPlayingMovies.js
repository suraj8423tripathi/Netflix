import { useEffect } from "react";

import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Reducers/MovieReducer";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNoewPlayingMoview = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNoewPlayingMoview();
  });
};

export default useNowPlayingMovies;
