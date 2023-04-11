import React, { useEffect } from 'react'
import './MovieTrailer.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieVideos, getMovieCast, getMovieOverview } from '../store/actions'
import { useParams } from 'react-router-dom';
export default function MovieTrailer() {
    const dispatch = useDispatch()
    const { VideoTrailer, MovieCast, MovieOverview } = useSelector((state) => state.infoMovies)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getMovieVideos(id))
        dispatch(getMovieCast(id))
        dispatch(getMovieOverview(id))
    }, [dispatch, id])
    const genner = MovieOverview && MovieOverview.genres
    return (
        <>
            <div className="trailer">
                <div className="poster"
                    style={MovieOverview ? {
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${MovieOverview.poster_path})`, backgroundSize: "cover",
                    } : {}}
                >
                </div>
                <div className="banner"
                    style={
                        MovieOverview ?
                            {
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${MovieOverview.backdrop_path || MovieOverview.poster_path})`,
                                backgroundSize: "cover",

                            } : {}
                    }
                >
                    <div className="content">
                        <h1>{MovieOverview && MovieOverview.title}</h1>
                        {genner && genner.map(category => (
                            <span key={category.id} className='category'>{category.name}</span>
                        ))}
                        <div className="overview1">{MovieOverview && MovieOverview.overview}</div>
                        <h2>Cast</h2>
                        <div className="cast-wrapper">
                            {MovieCast && MovieCast.map(cast => (
                                <div className="cast" key={cast.id}>
                                    <img className='cast_img' src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt='err' />
                                    <span className='cast_name' key={cast.name}>{cast.name} </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

            {VideoTrailer && (
                <iframe
                    width="100%"
                    height="600"
                    src={`https://www.youtube.com/embed/${VideoTrailer.key}`}
                    title={VideoTrailer.name}
                />
            )
            }

        </>
    )
}
