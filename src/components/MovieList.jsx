import MovieCard from "./MovieCard";

const MovieList = ({movieList, watchList, addToWatchList, removeWatchList, inWatchList}) => {

  
  const myList = movieList.map((mov, index) => {
    const isWatchList = watchList.filter(movie => {
          return movie.id === mov.id
      })

    let button = ''

    if (inWatchList && isWatchList.length > 0){
      button = <h2 key='button'>This movie is on your Watch List</h2>
    } else {
      button = <button key='button' onClick={()=>{addToWatchList(mov)}}>add</button>
      }

    return ( 
      <div>
        <MovieCard
          key={index}
          mov={mov}
          watchList={watchList}
          addToWatchList={addToWatchList}
          removeWatchList={removeWatchList}
        />
        {button}
      </div>
    );
  });

  return <div className="movie-container">{myList}</div>
};

export default MovieList;


  
