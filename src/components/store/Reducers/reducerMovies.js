import * as Types from "../Types/index";
const MovieinitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,
  TopRatedMovies: null,
  ActionMovies: null,
  NoWPlaying: null,
  MovieDetails: null,
  SearchMovies: null,
  VideoTrailer: null,
  MovieCast: null,
  MovieOverview: null,
};

const reducerMovies = (state = MovieinitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetflixOriginals: payload };

    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };

    case Types.GET_TOP_RATED_MOVIES:
      return { ...state, TopRatedMovies: payload };

    case Types.GET_ACTION_MOVIES:
      return { ...state, ActionMovies: payload };

    case Types.GET_NOW_PLAYING:
      return { ...state, NowPlaying: payload };

    case Types.SET_MOVIE_DETAILS:
      return { ...state, MovieDetails: payload };

    case Types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: payload };

    case Types.GET_MOVIE_VIDEOS:
      return { ...state, VideoTrailer: payload };

    case Types.GET_MOVIE_CAST:
      return { ...state, MovieCast: payload };

    case Types.GET_MOVIE_OVERVIEW:
      return { ...state, MovieOverview: payload };
    default:
      return state;
  }
};
export default reducerMovies;
