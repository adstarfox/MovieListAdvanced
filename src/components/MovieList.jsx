import MovieCard from "./MovieCard";

const MovieList = ({ movieList, addToWatchList, watchList, removeWatchList}) => {
  const myList = movieList.map((mov, index) => {
    return (
      <MovieCard
        key={index}
        mov={mov}
        watchList={watchList}
        addToWatchList={addToWatchList}
        removeWatchList={removeWatchList}
      />
    );
  });

  return <div className="movie-container">{myList}</div>;
};

export default MovieList;
