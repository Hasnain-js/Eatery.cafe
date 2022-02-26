import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/slider-image1.jpg";
import img2 from "../assets/slider-image2.jpg";
import img3 from "../assets/slider-image3.jpg";

function Slider() {
  return (
    <>
      <Carousel
        showArrows={true}
        onChange={onchange}
        onClickItem={onclick}
        showThumbs={false}
        autoPlay={true}
        interval={1000}
        infiniteLoop={true}
        showStatus={false}
      >
        <div className="slider">
          <img src={img1} alt="" />
          <p className="legend">
            <h3>New Restaurant in Town</h3>
            <h1>Enjoy our special menus every Sunday and Friday</h1>
            <button className="section-btn">Reservation</button>
          </p>
        </div>
        <div className="slider">
          <img src={img2} alt="" />
          <p className="legend">
            <h3>New Restaurant in Town</h3>
            <h1>Enjoy our special menus every Sunday and Friday</h1>
            <button className="section-btn">Reservation</button>
          </p>
        </div>
        <div className="slider">
          <img src={img3} alt="" />
          <p className="legend">
            <h3>New Restaurant in Town</h3>
            <h1>Enjoy our special menus every Sunday and Friday</h1>
            <button className="section-btn">Reservation</button>
          </p>
        </div>
      </Carousel>
    </>
  );
}
export default Slider;
