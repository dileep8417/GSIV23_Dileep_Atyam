import { MdSearch } from 'react-icons/md';
import '../styles/Searchbar.css';

const SearchBar = () => {
    return (
        <div className="search-field">
            <MdSearch className='search-icon' />
            <input type="text" placeholder="Search" />
        </div>
    );
}

export default SearchBar;