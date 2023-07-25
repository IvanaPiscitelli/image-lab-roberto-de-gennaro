import { useState } from "react";
import BtnSlider from "./ButtonSlider";

import capelli0 from "../assets/capelli0.png";
import capelli1 from "../assets/capelli1.png";
import capelli2 from "../assets/capelli2.png";
import capelli3 from "../assets/capelli3.png";
import capelli4 from "../assets/capelli4.png";

import "../index.css";

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const imgSlider = [capelli0, capelli1, capelli2, capelli3, capelli4];

  const nextSlide = () => {
    if (slideIndex !== imgSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imgSlider.length);
    }
  };

  return (
    <div className="container-slider">
      {imgSlider.map((img, index) => {
        return (
          <div key={img} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={img} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default ImageSlider;
