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
        {<button key="button" onClick={() => {removeWatchList(mov);}}>Remove</button>}
      </div>
    );
  });

  return <div className="movie-container">{myWatchList}</div>;
};

export default WatchList;
