import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesList, updatePageNumber } from "../slices/moviesListSlice";
import { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import debounce from 'lodash/debounce';
import Loader from "../assets/images/loading.gif";
import '../styles/MoviesList.css';
import SearchInfoContainer from "./SearchInfoContainer";

const MoviesList = () => {
    const { isLoading, movies, searchTerm } = useSelector(state => state.moviesList);
    const dispatch = useDispatch();
    const moviesListRef = useRef();

    const debounceDelay = 500;
    const loadMovies = debounce(() => {
        dispatch(updatePageNumber());
        dispatch(fetchMoviesList());
    }, debounceDelay);

    useEffect(() => {
        loadMovies();
    }, []);

    const onScrollHandler = () => {
        if (isLoading) {
            return;
        }
        const windowHeight = window.innerHeight;
        const elementTotalHeight = moviesListRef.current.scrollHeight;
        const elementScrolledPosition = moviesListRef.current.scrollTop;
        const visibleHeight = elementTotalHeight - elementScrolledPosition;
        const loadMore = (visibleHeight - 300) <= windowHeight;
        if (loadMore) {
            loadMovies();
        }
    }

    return (
        <>
            {searchTerm !== '' ? <SearchInfoContainer /> : ''}

            <div ref={moviesListRef} className="movies-list" onScroll={onScrollHandler}>
                {movies.map(movie => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
                <img className="loader" src={Loader} style={{ display: isLoading ? 'block' : 'none', 'marginBottom': '200px' }} />
            </div>
        </>
    );
}

export default MoviesList;