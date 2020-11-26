import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ConcertVideo = () => {
  const [concertDetails, setConcertDetails] = useState();
  const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "04c35731a5ee918f014970082a0088b1"; //temporary
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
    </div>
  )
};

export default ConcertVideo;
