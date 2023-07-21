import { useState, Fragment, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const movieDB = async () => {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en-US&page=1`
      );
      setMovieList(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    movieDB();
  }, []);

  const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeWatchList = (movie) => {
    let updatedList = watchList.filter((mov) => {
      return mov.id !== movie.id;
    });
    setWatchList(updatedList);
  };

  return (
    <Fragment>
      <Header />
      <main className="main-container">
        <MovieList
          movieList={movieList}
          watchList={watchList}
          addToWatchList={addToWatchList}
          removeWatchList={removeWatchList}
        />
        <WatchList
          watchList={watchList}
          removeWatchList={removeWatchList}
        />
      </main>
    </Fragment>
  );
}

export default App;
