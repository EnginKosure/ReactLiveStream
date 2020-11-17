import React from 'react';
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
 return (
  <StyledDiv>
    <Link to="/concertInfo">
      <img src="https://source.unsplash.com/featured?technology" width="450" height="350"/>
    </Link>
  </StyledDiv>
 )
}

export default Item;