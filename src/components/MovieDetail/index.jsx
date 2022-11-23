import React from 'react'
import { setMovieDetails } from '../store/actions';
import { useDispatch } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai'
import moment from "moment";
import './MovieDetails.scss'

function MovieDetals(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch()
  const handleCloseModal = () => dispatch(setMovieDetails(null));
  return (
    <div className="Details">
      <div className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`} onClick={handleCloseModal}></div>
      <div className={`Details_modal ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        style={
          movie ?
            {
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
              backgroundSize: "cover",
            } : {}
        }
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
            <p className="new">
              <span className="rating"> Rating: {movie && movie.vote_average * 10}%</span>
              <span className="popularity"> Popularity: {movie && movie.popularity}</span>
            </p>
            <div className="releaseDate">Release_date:
              {movie &&
                (moment(movie.release_date).format("DD/MM/YYYY") ||
                  moment(movie.first_air_date).format("DD/MM/YYYY"))}
              <p> Vote Average: {movie && movie.vote_average}<AiOutlineStar className="icon-star" /></p>
              <p>Vote Count: {movie && movie.vote_count}</p>
            </div>

            <p className="overview">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetals;