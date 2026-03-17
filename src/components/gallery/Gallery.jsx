import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "./Gallery.css";

// Your image imports remain the same
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.JPEG";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/crst1.jpg";
import img13 from "../../assets/crst2.jpg";
import img14 from "../../assets/crst3.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
  const [popupIndex, setPopupIndex] = useState(null);
  const galleryRef = useRef(null);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);
  
  const showPrev = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("gl-reveal");
        });
      },
      { threshold: 0.1 }
    );
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gl-bento-item");
      items.forEach((item) => observer.observe(item));
    }
  }, []);

  return (
    <section className="gl-page-root">
      
      {/* Catchy Left-Aligned Header */}
      <header className="gl-header-left">
        <div className="gl-label">INSIDE HGSI</div>
        <h1 className="gl-title">Culture <br />In Focus</h1>
        <p className="gl-subtitle">
          A visual chronicle of the energy, dedication, and vibrant community 
          driving our success every single day.
        </p>
      </header>

      {/* Kinetic Bento Grid */}
      <div className="gl-bento-grid" ref={galleryRef}>
        {images.map((src, index) => (
          <div 
            key={index}
            className={`gl-bento-item gl-span-${(index % 6) + 1}`}
            onClick={() => openPopup(index)}
          >
            <div className="gl-image-container">
              <div className="gl-img-wrapper">
                <img src={src} alt={`Moment ${index}`} className="gl-actual-img" />
              </div>
              
              {/* The "Cool" Hover Details */}
              <div className="gl-hover-overlay">
                <ArrowUpRight size={32} className="gl-icon" />
                <span className="gl-meta">MOMENT {index + 1}</span>
              </div>
              
              {/* Brutalist Shadow Offset */}
              <div className="gl-brutal-shadow"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Ultra-Dark Popup */}
      {popupIndex !== null && (
        <div className="gl-popup-overlay" onClick={closePopup}>
          <button className="gl-close-btn" onClick={closePopup}><X size={40} /></button>
          
          <button className="gl-nav-btn gl-left" onClick={showPrev}><ChevronLeft size={50} /></button>
          
          <div className="gl-popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[popupIndex]} alt="Enlarged view" className="gl-enlarged-img" />
          </div>

          <button className="gl-nav-btn gl-right" onClick={showNext}><ChevronRight size={50} /></button>
        </div>
      )}

    </section>
  );
}