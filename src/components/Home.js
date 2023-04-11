import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Intro from "../components/Intro";
import MovieDetals from "./MovieDetail";

function Home(props) {
  const { MovieDetails } = useSelector((state) => state.infoMovies);

  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);

  useEffect(() => {
    setIsShowMovieDetails(MovieDetails ? true : false);
  }, [MovieDetails]);

  return (
    <div>
      <Intro />
      <MovieList />
      <MovieDetals showModal={isShowMovieDetails} movie={MovieDetails} />
    </div>
  );
}

export default Home;
