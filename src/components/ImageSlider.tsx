import { useState } from "react";
import BtnSlider from "./ButtonSlider";

import capelli0 from "../assets/capelli0.png";
import capelli1 from "../assets/capelli1.png";
import capelli2 from "../assets/capelli2.png";
import capelli3 from "../assets/capelli3.png";
import capelli4 from "../assets/capelli4.png";

import "../index.css";

const ImageSlider = () => {
  const [slideIndices, setSlideIndices] = useState<number[]>([0, 1]);
  const imgSlider = [
    capelli0,
    capelli0,
    capelli1,
    capelli1,
    capelli2,
    capelli2,
    capelli3,
    capelli3,
    capelli4,
    capelli4,
  ];

  const nextSlide = () => {
    const newIndex1 = (slideIndices[0] + 2) % imgSlider.length;
    const newIndex2 = (slideIndices[1] + 2) % imgSlider.length;
    setSlideIndices([newIndex1, newIndex2]);
  };

  const prevSlide = () => {
    const newIndex1 = (slideIndices[0] - 2 + imgSlider.length) % imgSlider.length;
    const newIndex2 = (slideIndices[1] - 2 + imgSlider.length) % imgSlider.length;
    setSlideIndices([newIndex1, newIndex2]);
  };

  return (
    <div className="container-slider">
      {imgSlider.map((img, index) => {
        return (
          <div key={index} className={slideIndices.includes(index) ? "slide active-anim" : "slide"}>
            <img src={img} className={index === slideIndices[0] ? "left" : "right"} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default ImageSlider;
