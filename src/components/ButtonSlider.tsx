import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import "../index.css";

interface Props {
  direction: string;
  moveSlide: () => void;
}

const BtnSlider = ({ direction, moveSlide }: Props) => {
  return (
    <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      {direction === "next" ? (
        <MdOutlineArrowForwardIos size={{ base: "19px", md: "30px" }} />
      ) : (
        <MdOutlineArrowBackIos size={{ base: "19px", md: "30px" }} />
      )}
    </button>
  );
};

export default BtnSlider;
