

const MovieCard = ({mov, addToWatchList, removeWatchList, watchList}) => {

    const addMovieHandler = (mov) => {
        addToWatchList(mov)
    }

    const removeMovieHandler = (mov) => {
        removeWatchList(mov)
    }

    // const isWatchList = watchList.filter(movie => {
    //     return movie.id === mov.id
    // })

    // const button = isWatchList.length === 0 ? <button onClick={()=>{addMovieHandler(mov)}}>add</button> : <button onClick={()=>{removeMovieHandler(mov)}}>remove</button>
    
    return (
        <div className="movie-card">
            <h2>{mov.title}</h2>
            <img src={`https://image.tmdb.org/t/p/original${mov.poster_path}`} alt={`${mov.original_title}'s Poster`} />
            {/* {button} */}
        </div>
    )
}

export default MovieCard