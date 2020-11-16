import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item/Item";

import "./Carousel.scss";

const breakPoints = [
  // { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 }
  { width: 1, itemsToShow: 1 },
  { width: 650, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 3 },
];

const BootstrapCarousel = () => {
  return (
    <div className="Carousel">
      <Carousel breakPoints={breakPoints}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;

// import {Carousel} from 'react-bootstrap';

// import './Carousel.scss';

// const BootstrapCarousel = () => {
//   return (
//    <div>
//     <div className='container-fluid' >
//      <div className="row">
//       <div className="col-sm-12">
//           <h3>React Bootstrap Carousel</h3>
//       </div>
//      </div>
//      <div className="row">
//       <div className="col-4">
//        <Carousel>
//         <Carousel.Item>
//          <img
//              className="d-block w-100"
//              src="https://picsum.photos/300/150?img=1"
//              alt="First slide"
//          />
//          <Carousel.Caption>
//              <h3>First slide label</h3>
//              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//          </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//          <img
//              className="d-block w-100"
//              src="https://picsum.photos/300/150?img=2"
//              alt="Second slide"
//          />
//          <Carousel.Caption>
//              <h3>Second slide label</h3>
//              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//          </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//          <img
//              className="d-block w-100"
//              src="https://picsum.photos/300/150?img=3"
//              alt="Third slide"
//          />
//          <Carousel.Caption>
//              <h3>Third slide label</h3>
//              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//          </Carousel.Caption>
//         </Carousel.Item>
//        </Carousel>
//       </div>
//      </div>
//     </div>
//    </div>
//   );
// };

// export default BootstrapCarousel;

{
  /* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="../../assets/signin.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="../../assets/signin.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="../../assets/signin.jpg" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
   </div> */
}
