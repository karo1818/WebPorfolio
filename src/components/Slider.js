import React, { useState } from "react";
import "../styles/Slider.css"

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const handlePrev = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider">
      <button className="leftbtn" onClick={handlePrev}></button>
      <img className="imgslider" src={images[currentImageIndex]} alt="slider" />
      <button className="rightbtn" onClick={handleNext}></button>
    </div>
  );
};

export default Slider;
