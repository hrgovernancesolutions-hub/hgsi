import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpg";

export default function Gallery() {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img3, img2, img4, img1, img6, img5
  ];

  const [popupIndex, setPopupIndex] = useState(null);
  const contentRef = useRef(null);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);

  const showPrev = () =>
    setPopupIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const showNext = () =>
    setPopupIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  /* Reveal Animation for Bottom Content */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
        });
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
  }, []);

  return (
    <section className="gallery-page">

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            className="gallery-photo fade-in-stagger"
            style={{ animationDelay: `${index * 120}ms` }}
            src={src}
            key={index}
            alt="gallery-item"
            onClick={() => openPopup(index)}
          />
        ))}
      </div>

      {/* Popup */}
      {popupIndex !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              <X size={28} />
            </button>
            <button className="nav-btn left" onClick={showPrev}>
              <ChevronLeft size={25} />
            </button>

            <img
              src={images[popupIndex]}
              alt="popup"
              className="popup-image zoom-in-image"
            />

            <button className="nav-btn right" onClick={showNext}>
              <ChevronRight size={25} />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Content */}
      <div className="gallery-content-section" ref={contentRef}>
        <h2>Memories That Define Us</h2>
        <p>
          Every picture captured here reflects the passion, dedication, and 
          vibrant culture of our team. These unforgettable moments show 
          the real spirit behind our success.
        </p>
      </div>
    </section>
  );
}
