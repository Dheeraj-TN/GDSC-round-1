import React from "react";
import "./ImageGallery.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div className="image-row">
        <img src={img1} alt="Image 1" className="gallery-image" />
        <img src={img2} alt="Image 2" className="gallery-image" />
        <img src={img3} alt="Image 3" className="gallery-image" />
        <img src={img4} alt="Image 4" className="gallery-image" />
      </div>
      <div className="image-row">
        <img src={img5} alt="Image 5" className="gallery-image" />
        <img src={img6} alt="Image 6" className="gallery-image" />
        <img src={img7} alt="Image 7" className="gallery-image" />
        <img src={img8} alt="Image 8" className="gallery-image" />
      </div>
    </div>
  );
};

export default ImageGallery;
