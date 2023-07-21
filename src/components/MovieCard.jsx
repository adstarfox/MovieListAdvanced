

const MovieCard = ({mov, addToWatchList, removeWatchList, watchList}) => {

    const addMovieHandler = (mov) => {
        addToWatchList(mov)
    }

    const removeMovieHandler = (mov) => {
        removeWatchList(mov)
    }

    const button = watchList.length > 0 ? <button onClick={()=>{removeMovieHandler(mov)}}>remove</button> : <button onClick={()=>{addMovieHandler(mov)}}>add</button>
    
    return (
        <div className="movie-card">
            <h2>{mov.title}</h2>
            <img src={`https://image.tmdb.org/t/p/original${mov.poster_path}`} alt={`${mov.original_title}'s Poster`} />
            {button}
        </div>
    )
}

export default MovieCard