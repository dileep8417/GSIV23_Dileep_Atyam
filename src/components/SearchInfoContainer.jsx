import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesList, resetResults } from "../slices/moviesListSlice";


const SearchInfoContainer = () => {
    const { searchTerm } = useSelector(state => state.moviesList);
    const dispatch = useDispatch();

    const clearSearch = () => {
        dispatch(resetResults());
        dispatch(fetchMoviesList());
    }

    return (
        <div className="search-info-container">
            <div className="search-result-txt">
                Showing results for <span>{searchTerm}</span>
                <button className="clear-search" onClick={clearSearch}>Clear Search</button>
            </div>
        </div>
    );
}

export default SearchInfoContainer;