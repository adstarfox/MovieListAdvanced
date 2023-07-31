import MovieCard from "./MovieCard";

const WatchList = ({ watchList, removeWatchList }) => {
  const myWatchList = watchList.map((mov, index) => {
    return (
      <div> 
        <MovieCard
          key={index}
          mov={mov}
          watchList={watchList}
          removeWatchList={removeWatchList}
        />
      </div>
    );
  });

  return <div className="movie-container">{myWatchList}</div>;
};

export default WatchList;
