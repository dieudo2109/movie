import React from 'react';
import './MovieList.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from "swiper";
import { useDispatch } from 'react-redux';
import { setMovieDetails } from '../store/actions';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

function MovieGird(props) {
    const { movies, title, isNetflix, id } = props
    const dispatch = useDispatch()
    const handleSelectMovie = (movie) => dispatch(setMovieDetails(movie));
    return (
        <div className='MovieGird'>
            <h1 className="heading">{title}</h1>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                freeMode={true}
                loop={true}
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },

                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper">
                <div className="MovieGird_wrap">
                    {movies &&
                        movies.length > 0 &&
                        movies.map((movie, index) => {


                            if (movie.poster_path && movie.backdrop_path !== null) {
                                let imageUrl = isNetflix
                                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                    : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                                return (
                                    <SwiperSlide key={index} className="movieItem"
                                        onClick={() => handleSelectMovie(movie)}
                                    >
                                        <img
                                            src={imageUrl}
                                            alt="img"
                                        />

                                        <div className="movieName">{movie.title || movie.name}</div>
                                    </SwiperSlide>
                                );
                            }
                        })}
                </div>
            </Swiper>
        </div>

    )
}

export default MovieGird