import React from "react";
import { useHistory } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const ConcertVideo = ({ title, vote_average, poster_path, overview, id }) => {
  const history = useHistory();
  return (
    <a
      onClick={() => history.push(`/profile`)}
      className="list-group-item text-decoration-none"
    >
      <p>{poster_path ? IMG_API + poster_path : "movie"}</p>
    </a>
  );
};

export default ConcertVideo;
// IMG_API + poster_path
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// /9HT9982bzgN5on1sLRmc1GMn6ZC.jpg
