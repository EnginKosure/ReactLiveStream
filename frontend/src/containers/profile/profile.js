import React, { Component } from 'react';
import UserCard from '../../components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProfile from '../register/UpdateProfile';

import './profile.scss';

const Profile = () => {
  const user = useSelector(state => state?.users?.items[state?.users?.items?.length - 1]);
  return (
    <div className="profile-container">
      <div className="user-inner">
        <UserCard user={user} />
      </div>
      <div className="profile-inner">
        <UpdateProfile current={user} />

      </div>
    </div>
  );
}

export default Profile;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from '../../components/UserCard';
// import { useDispatch, useSelector } from 'react-redux';
// import UpdateProfile from '../register/UpdateProfile';
// import ConcertVideo from '../profileEx/ConcertVideo/ConcertVideo';
// import ConcertVideoList from '../profileEx/ConcertVideoList/ConcertVideoList';

// import './profile.scss';

// const Profile = () => {
//   const user = useSelector(state => state?.users?.items[state?.users?.items?.length - 1]);

//   const [concerts, setConcerts] = useState([]);

//   const FEATURED_API =
//     "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

//   const fetchConcerts = async (API) => {
//     const { data } = await axios.get(API);
//     console.log(data.results);
//     setConcerts(data.results);
//     console.log(concerts);
//   };

//   useEffect(() => {
//     fetchConcerts(FEATURED_API);
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-8">
//           <div className="embed-responsive embed-responsive-16by9">
//             <ConcertVideo />
//           </div>
//         </div>
//         <div className="col-4">
//           <h2 className="text-center">Concerts Lists</h2>
//           <ul className="list-group ">
//             {concerts.map((concert) => (
//               <ConcertVideoList key={concert.id} {...concert} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Profile;


