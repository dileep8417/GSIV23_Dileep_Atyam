import { useDispatch, useSelector } from "react-redux";
import MoviePoster from './MoviePoster';
import Loader from "../assets/images/loading.gif";
import "../styles/Details.css";
import { useEffect } from "react";
import { fetchMovieDetails } from "../slices/movieDetailsSlice";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { getCastMemebers, getMovieDirector } from "../utils";

const MovieDetails = () => {
    const {isLoading, movie} = useSelector(state => state.movieDetails);
    const dispatch = useDispatch();
    const movieId = useParams('movieId');

    if (!movieId) {
        return;
    }

    useEffect(() => {
        dispatch(fetchMovieDetails(movieId));
    }, []);

    if (isLoading || Object.keys(movie).length === 0) {
        return <img className="loader" src={Loader} />
    }

    const movieInfo = [];
    if (movie.release_date) {
        movieInfo.push(movie.release_date.split('-')[0]);
    }

    if (movie.runtime) {
        movieInfo.push(movie.runtime + ' min');
    }

    let director;
    let castMembers = '';
    if (movie.credits) {
        castMembers = getCastMemebers(movie.credits.cast);
        director = getMovieDirector(movie.credits.crew);
        if (director) {
            movieInfo.push(director);
        }
    }

    return (
        <div className="details-section" style={{padding: '0 16px 0 0'}}>
            <div className="left">
                <MoviePoster poster_path={movie.poster_path} title={movie.title} />
            </div>
            <div className="right">
                <div className="row">
                    <div className="title">{movie.title}</div>
                    <div className="rating">({movie.vote_average.toFixed(0)} <MdStarRate className='icon' /> TMDB)</div>
                </div>
                <div className="info">
                    <div className="movie-info">{movieInfo.join(' | ')}</div>
                    <div className="cast-info">{castMembers ? ('Cast:' + castMembers) : ''}</div>
                </div>
                <div className="description">
                    {movie.overview ? 'Description: ' + movie.overview : ''}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;