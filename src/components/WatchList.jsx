import MovieCard from "./MovieCard";
import Popup from "./Modal/Popup";
import { useState } from "react";

const WatchList = ({ watchList, removeWatchList }) => {
  const [modal, setModal] = useState(false)

  const clickHandler = (mov) => {
    removeWatchList(mov);
    setModal(!modal)
  }
  const myWatchList = watchList.map((mov, index) => {
    return (
      <div>
        <MovieCard
          key={index}
          mov={mov}
          watchList={watchList}
          removeWatchList={removeWatchList}
        />
        {<button key="button" onClick={() => clickHandler(mov)}>Remove</button>}
      </div>
    );
  });
  return <div className="movie-container">
    {myWatchList}
    {modal ? <Popup modal={modal} setModal={setModal}></Popup> : <></>}
    </div>;
};

export default WatchList;
