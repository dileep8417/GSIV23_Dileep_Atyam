import { useNavigate } from 'react-router-dom';
import { moviePosterUrl } from "../constants/urls";

const MovieCard = ({ movie }) => {
    const maxDescriptionChars = 62;
    const description = movie.overview.length > maxDescriptionChars ? movie.overview.substring(0, maxDescriptionChars).trim() + '...' :  movie.overview;
    const navigate = useNavigate();

    const cardClickHandler = (movieId) => {
        navigate(`/details/${movieId}`)
    }

    return (
        <div id={movie.id} className="movie-card" onClick={() => cardClickHandler(movie.id)}>
            <div className="poster">
                {movie.poster_path ? (
                    <img src={`${moviePosterUrl}${movie.poster_path}`} loading="lazy" alt={`${movie.title} poster`} />
                ) : (
                    <div className="no-poster"></div>
                ) }
            </div>
            <div className="info">
                <div className="row">
                    <div className="title">{movie.title}</div>
                    <div className="rating">({movie.vote_average}/10 TMDB)</div>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;