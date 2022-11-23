import axios from "axios";
import * as Types from "../Types/index";
const API_KEY = '96e234ff14f852acda626fefcc722102';
const BASE_URL ='https://api.themoviedb.org/3'

export const getNetflixOriginals = () => async (dispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}`
      );
      dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results });
    } catch (error) {
      console.log("Get Netflix Originals error: ", error);
    }
  };

  export const getTrendingMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=3`
        )
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Trending movies error: ", error);
      }
    }
  }
  
  export const getTopRatedMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
        )
        dispatch({ type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Top rate movies error: ", error);
      }
    }
  }
  
  export const getActionMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=2`
        )
  
        dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Action movies error: ", error);
      }
    }
  }

  export const getNowPlaying = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=3`
        )
  
        dispatch({ type: Types.GET_NOW_PLAYING, payload: result.data.results })
      } catch (error) {
        console.log("Get Action movies error: ", error);
      }
    }
  }

  export const setMovieDetails = (movie) => dispatch => {      
    dispatch({type: Types.SET_MOVIE_DETAILS, payload: movie});
  }
 
 export const getSearchMovies=(keywords) => async dispatch=>{
  try {
    const result= await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
    )
    dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
  } catch (error) {
    console.log("Get search movies error: ", error);
  }
 }
 
