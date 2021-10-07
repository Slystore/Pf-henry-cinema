import React from "react";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import left from "../../assets/left.png";
import right from '../../assets/right.png';
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
 
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? right  : left} alt=""/>
    </button>
  );
}