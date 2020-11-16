import React from 'react';
import styled from "styled-components";
import "./Item.scss";

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
   <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
  </StyledDiv>
 )
}

export default Item;