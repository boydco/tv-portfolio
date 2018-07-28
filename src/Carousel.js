import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}


export default Carousel;
