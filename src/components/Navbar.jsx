import { MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/Navbar.css';

const Navbar = () => {

    const location = useLocation();
    const isDetailsPage = location.pathname.includes('/details');

    return (
        <nav>
            {isDetailsPage ? (<p className='nav-heading'>Movie Details</p>) : <SearchBar />}
            <Link className='nav-icon' to='/' data-testid='home-link'><MdHome /></Link>
        </nav>
    );
}

export default Navbar;