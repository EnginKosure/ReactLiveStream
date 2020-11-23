import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ConcertInfo.scss";
// import Navbar from "../../Navbar/Navbar";

const ConcertInfo = () => {
  const [concertDetails, setConcertDetails] = useState()
  const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/"
  const apiKey = "04c35731a5ee918f014970082a0088b1"; //temporary
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  useEffect(() => {
    axios.get(
      movieDetailBaseUrl + id, {
      params: {
        api_key: apiKey,
      }
    }
    )
      .then(res => setConcertDetails(res?.data))
      .catch()
      .finally()
  }, [id])
  return (
    <div className="row">
      <div className="col-md-9 offset-md-3">
        <div className="card border-dark mb-3">
          <div className="card-header">Text about the concerts/links</div>
          <div className="card-body">
            <h5 className="card-title">{concertDetails?.original_title}</h5>
            <img src={baseImageUrl + concertDetails?.poster_path} alt={"Concert Poster"} width="670" height="350" />
            <p className="card-text">
              {concertDetails?.overview}
            </p>
          </div>
        </div>
        <div className="card border-dark mb-3">
          <div className="card-header">Info about the concert</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-dark mb-3">
          <div className="card-header">Book this concert</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary float-right">Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertInfo;

{
  /* <div class="card-deck">
 <div className="row">
  <div className="col">
 
  </div>
 </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div> */
}
