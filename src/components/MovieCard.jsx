import { useNavigate } from 'react-router-dom';
import { MdStarRate } from "react-icons/md";
import MoviePoster from './MoviePoster';

const MovieCard = ({ movie }) => {
    const maxDescriptionChars = 62;
    const description = movie.overview.length > maxDescriptionChars ? movie.overview.substring(0, maxDescriptionChars).trim() + '...' :  movie.overview;
    const navigate = useNavigate();

    const cardClickHandler = (movieId) => {
        navigate(`/details/${movieId}`)
    }

    return (
        <div id={movie.id} className="movie-card" onClick={() => cardClickHandler(movie.id)}>
            <MoviePoster poster_path={movie.poster_path} title={movie.title} />
            <div className="info">
                <div className="row">
                    <div className="title">{movie.title}</div>
                    <div className="rating">({movie.vote_average.toFixed(0)} <MdStarRate className='icon' /> TMDB)</div>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;