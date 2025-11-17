import React from "react";
import "./Gallery.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img3, img1, img5, img2, img4, img6];

  return (
    <section className="gallery-page">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img className="gallery-photo" src={src} key={index} alt="" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
