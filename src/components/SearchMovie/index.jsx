import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getSearchMovies } from '../store/actions';
import { setMovieDetails } from '../store/actions';
import MovieDetals from '../MovieDetail';
import './Search.scss'

const useQuery = () => new URLSearchParams(useLocation().search);
function SearchMovie() {
    const dispatch = useDispatch();
    const { SearchMovies, MovieDetails } = useSelector(state => state.infoMovies)
    const keywords = useQuery().get("keywords");

    useEffect(() => {
        if (keywords) dispatch(getSearchMovies(keywords));
    }, [keywords, dispatch]);
    return (
        <>
            <div className="ListSearch">
                {SearchMovies && SearchMovies.length > 0 ? (
                    <div
                        className="searchContent"
                    >
                        {SearchMovies.map((movie, index) => {
                            if (
                                movie.backdrop_path !== null &&
                                movie.media_type !== "person"
                            ) {
                                const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                                return (
                                    <div
                                        key={index}
                                        className="movieItem"
                                        onClick={() => dispatch(setMovieDetails(movie))}
                                    >
                                        <img src={imageUrl} alt='' />
                                        <span>{movie.title || movie.name}</span>
                                    </div>
                                );
                            }
                        })}
                    </div>
                ) : (
                    <div className='error'>
                        <h2>Your search for "{keywords}" did not have any matches.</h2>
                    </div>
                )}
            </div>
            <MovieDetals showModal={MovieDetails ? true : false} movie={MovieDetails} />
        </>
    )
}

export default SearchMovie;