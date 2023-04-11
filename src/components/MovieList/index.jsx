import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    getNetflixOriginals,
    getTrendingMovies,
    getTopRatedMovies,
    getActionMovies,
    getNowPlaying
} from '../store/actions';
import MovieGird from './MovieGird';
import './MovieList.scss'
function MovieList() {
    const dispatch = useDispatch();
    const { NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        NowPlaying
    } = useSelector((state) => state.infoMovies)

    useEffect(() => {
        dispatch(getNetflixOriginals());
        dispatch(getTrendingMovies());
        dispatch(getTopRatedMovies());
        dispatch(getActionMovies());
        dispatch(getNowPlaying())
    }, [dispatch])
    return (
        <div>
            <MovieGird movies={NetflixOriginals} title="Netflix Originals" isNetflix={true} />
            <MovieGird movies={TrendingMovies} title="TrendingMovies" />
            <MovieGird movies={TopRatedMovies} title="TopRatedMovies" />
            <MovieGird movies={ActionMovies} title="ActionMovies" />
            <MovieGird movies={NowPlaying} title="NowPlaying" />
        </div>
    )
}

export default MovieList