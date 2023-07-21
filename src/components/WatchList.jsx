import MovieCard from "./MovieCard";

const WatchList = ({ watchList, removeWatchList }) => {
  const myWatchList = watchList.map((mov, index) => {
    return (
      <MovieCard
        key={index}
        mov={mov}
        watchList={watchList}
        removeWatchList={removeWatchList}
      />
    );
  });

  return <div className="movie-container">{myWatchList}</div>;
};

export default WatchList;
