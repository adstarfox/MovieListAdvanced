import movieIMG from '../assets/movieIMG.jpg'

const Header = () => {
    return (
        <header id='header'>
            <img src={movieIMG} alt="Popcorn" />
            <h1>Rate your Movies</h1>
            <nav className='header-nav'>
            <a href="">Review</a>
            <a href="">Profile</a>
            <a href="">Secret Link</a>
            </nav>
        </header>
    )
}

export default Header