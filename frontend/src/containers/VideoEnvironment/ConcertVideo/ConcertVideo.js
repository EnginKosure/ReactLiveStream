import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ConcertVideo = () => {
  const [concertDetails, setConcertDetails] = useState();
  const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "04c35731a5ee918f014970082a0088b1"; //temporary
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  // const { id } = useParams();
  // useEffect(() => {
  //   axios
  //     .get(movieDetailBaseUrl + id, {
  //       params: {
  //         api_key: apiKey,
  //       },
  //     })
  //     .then((res) => setConcertDetails(res?.data))
  //     .catch()
  //     .finally((res) => console.log(res.data));
  // }, [id]);

  // console.log(concertDetails);
  return (
    <p>works</p>
  )
  // return {
  //   /* <img
  //     className="embed-responsive-item"
  //     src={baseImageUrl + concertDetails?.poster_path}
  //   /> */
  // };
};

export default ConcertVideo;
