import { useState } from "react";

const MovieCard = ({ mov, addToWatchList, removeWatchList, watchList }) => {
  const [details, setDetails] = useState(false);

  const clickHandler = () => {
    setDetails(!details)
  }

  const theMovieCard = details ? (
    <div className="movie-card">
      <h2>{mov.title}</h2>
      <p>{mov.overview}</p>
      <span>
        <h3>{mov.vote_average}</h3>
        <h3>{mov.release_date}</h3>
      </span>
      <button onClick={()=>{clickHandler()}}>Return</button>
    </div>
  ) : (
    <div className="movie-card">
      <h2>{mov.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
        alt={`${mov.original_title}'s Poster`}
      />
      <button onClick={()=>{clickHandler()}}>See Details</button>
    </div>
  );

  return (
    <>
    {theMovieCard}
    </>
  );
};

export default MovieCard;
