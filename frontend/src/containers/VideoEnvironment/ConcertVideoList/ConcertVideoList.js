import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const ConcertVideoList = ({ title, vote_average, poster_path, overview, id }) => {
//  const history = useHistory();
//  return (
//   <a
//    onClick={() => history.push(`/profile`)}
//    className="list-group-item text-decoration-none"
//   >
//    <p>{poster_path ? IMG_API + poster_path : "movie"}</p>
//   </a>
//  );
// };

const ConcertVideoList = () => {
 const [concerts, setConcerts] = useState([]);
 const getData = async () => {
  // const { data } = await axios.get("/api/artists");
  // const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
  const url = '/api/concerts?emailaddress=par@gmail.com'
  const { data } = await axios.get(url);
  console.log(data);
 }
 useEffect(() => {
  getData();
 }, [])

 return (
  <ul className="list-group ">
   {concerts.map((concert) => (
    <a key={concert.ConcerId} {...concert.ConcertLink}></a>
   ))}
  </ul>
 )
}

export default ConcertVideoList;
// IMG_API + poster_path
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// /9HT9982bzgN5on1sLRmc1GMn6ZC.jpg
