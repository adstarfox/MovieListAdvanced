import { useState, Fragment, useEffect } from "react";
import axios from 'axios'
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import MovieReview from "./components/MovieReview";
import Login from './components/Login'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Popup from "./components/Modal/Popup";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [inWatchList, setInWatchList] = useState(false)

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
    setInWatchList(true)
  };

  const removeWatchList = (movie) => {
    let updatedList = watchList.filter((mov) => {
      return mov.id !== movie.id;
    });
    setWatchList(updatedList);
    // setInWatchList(false)
  };

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          index
          element={
            <MovieList
              movieList={movieList}
              watchList={watchList}
              addToWatchList={addToWatchList}
              removeWatchList={removeWatchList}
              inWatchList={inWatchList}
            />
          }
        />
        <Route
          path="watchList"
          element={
            <WatchList
              watchList={watchList}
              removeWatchList={removeWatchList}
              inWatchList={inWatchList}
            />
          }
        />
        <Route path="review" element={<MovieReview />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;

{
  /* <main className="main-container">
<MovieList
  movieList={movieList}
  watchList={watchList}
  addToWatchList={addToWatchList}
  removeWatchList={removeWatchList}
/>
<WatchList
  
/>
</main> */
}
