import React, { useState, useEffect, useSelector } from "react";
import ConcertVideoList from "./ConcertVideoList/ConcertVideoList";
import axios from "axios";
import ConcertVideo from "./ConcertVideo/ConcertVideo";

// import UserCard from '../../components/UserCard';
// import { useDispatch, useSelector } from 'react-redux';
// import UpdateProfile from '../register/UpdateProfile';

import "./videoEnvironment.scss";

const VideoEnvironment = () => {
  //   const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
  //   return (
  //       <div className="profile-container">
  //           <div className="user-inner">
  //               <UserCard user={user} />
  //           </div>
  //           <div className="profile-inner">
  //               <UpdateProfile current={user} />

  //           </div>
  // // const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
  // // return (
  // //     <div className="profile-container">
  // //         <UserCard user={user} />
  // //         <UpdateProfile current={user} />
  // //     </div>
  // // );

  // const [concerts, setConcerts] = useState([]);

  // const FEATURED_API =
  //   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  // const fetchConcerts = async (API) => {
  //   const { data } = await axios.get(API);
  //   console.log(data.results);
  //   setConcerts(data.results);
  //   console.log(concerts);
  // };
  // const getData = async () => {
  //   // const { data } = await axios.get("/api/artists");
  //   // const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
  //   const url = '/api/concerts?emailaddress=par@gmail.com'
  //   const { data } = await axios.get(url);
  //   console.log(data);
  // }
  // useEffect(() => {
  //   getData();
  // }, [])

  // useEffect(() => {
  //   fetchConcerts(FEATURED_API);
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="embed-responsive embed-responsive-16by9">
            <ConcertVideo />
          </div>
        </div>
        <div className="col-4">
          <h2 className="text-center">Concerts Lists</h2>
          <ConcertVideoList />
        </div>
      </div>
    </div>
  );
};

export default VideoEnvironment;

{/* <div className={classnames('call-window', status)}>
      <video id="peerVideo" ref={peerVideo} autoPlay />
      <video id="localVideo" ref={localVideo} autoPlay muted />
      <div className="video-control">
        <button
          key="btnVideo"
          type="button"
          className={getButtonClass('fa-video-camera', video)}
          onClick={() => toggleMediaDevice('video')}
        />
        <button
          key="btnAudio"
          type="button"
          className={getButtonClass('fa-microphone', audio)}
          onClick={() => toggleMediaDevice('audio')}
        />
        <button
          type="button"
          className="btn-action hangup fa fa-phone"
          onClick={() => endCall(true)}
        />
      </div>
    </div> */}
