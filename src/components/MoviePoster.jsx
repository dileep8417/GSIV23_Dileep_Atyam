import { moviePosterUrl } from "../constants/urls";

const MoviePoster = ({ poster_path, title }) => {
    return (
        <div className="poster">
            {poster_path ? (
                <img src={`${moviePosterUrl}${poster_path}`} loading="lazy" alt={`${title} poster`} />
            ) : (
                <div className="no-poster"></div>
            )}
        </div>
    );
}

export default MoviePoster;