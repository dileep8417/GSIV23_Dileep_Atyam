import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <SearchBar />
            <Link className='nav-icon' to='/' data-testid='home-link'><MdHome /></Link>
        </nav>
    );
}

export default Navbar;