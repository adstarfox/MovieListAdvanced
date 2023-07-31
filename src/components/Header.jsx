import { NavLink } from 'react-router-dom'
import movieIMG from '../assets/movieIMG.jpg'

const Header = () => {
    return (
        <header id='header'>
            <img src={movieIMG} alt="Popcorn" />
            <h1>Rate your Movies</h1>
            <nav className='header-nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/watchList'>My Watch List</NavLink>
            <NavLink to="/review">Review a Movie</NavLink>
            </nav>
        </header>
    )
}

export default Header