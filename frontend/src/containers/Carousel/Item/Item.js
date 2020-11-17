import React, {useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import "./Item.scss";
import { Link } from 'react-router-dom';


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
  cursor: pointer; 
`;



const Item = () => {
  const [concerts, setConcerts] = useState({})

  const options = {
    method: 'GET',
    url: 'https://robby.p.rapidapi.com/search.json',
    params: {
      country: 'US',
      lng: '-74.00597',
      city: 'New York',
      lat: '40.71435',
      to: '2020-08-01T20:30:00+08:00',
      limit: '30',
      distance: '10',
      from: '2019-06-30T20:30:00'
    },
    headers: {
      'x-rapidapi-key': '15ad104108mshf6f08f42562fee9p141a21jsne13a7acdf194',
      'x-rapidapi-host': 'robby.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
 return (
  <StyledDiv>
    <Link to="/concertInfo">
      <img src="https://source.unsplash.com/featured?technology" width="450" height="350"/>
    </Link>
  </StyledDiv>
 )
}

export default Item;