import { MdSearch } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import '../styles/Searchbar.css';
import { fetchMoviesList, resetResults, setSearchTerm } from '../slices/moviesListSlice';
import { useRef } from 'react';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchRef = useRef();

    const searchClickHandler = () => {
        dispatch(resetResults());
        dispatch(setSearchTerm(searchRef.current.value));
        dispatch(fetchMoviesList());
        searchRef.current.value = '';
    }

    return (
        <div className="search-field">
            <MdSearch className='search-icon' onClick={searchClickHandler} />
            <input ref={searchRef} type="text" placeholder="Search" onKeyDown={(e) => e.keyCode === 13 ? searchClickHandler() : ''} />
        </div>
    );
}

export default SearchBar;