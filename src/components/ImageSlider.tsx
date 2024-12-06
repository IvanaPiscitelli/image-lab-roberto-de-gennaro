import { useState } from "react";
import BtnSlider from "./ButtonSlider";

import balayage from "../assets/balayage.webp";
import taglioUomo0 from "../assets/taglio-uomo0.webp";
import taglioUomo1 from "../assets/taglio-uomo1.webp";
import taglioUomo2 from "../assets/taglio-uomo2.webp";
import taglioUomo3 from "../assets/taglio-uomo3.webp";
import taglioUomo4 from "../assets/taglio-uomo4.webp";
import taglioUomo5 from "../assets/taglio-uomo5.webp";
import "../styles/index.css";

const ImageSlider = () => {
  const [slideIndices, setSlideIndices] = useState<number[]>([0, 1]);
  const imgSlider = [balayage, taglioUomo0, taglioUomo1, taglioUomo2, taglioUomo3, taglioUomo4, taglioUomo5];

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
            <img
              src={img}
              alt="best works photos"
              className={index === slideIndices[0] ? "left" : "right"}
              loading="lazy"
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default ImageSlider;
