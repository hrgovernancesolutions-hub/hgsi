import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "./Gallery.css";

// Original Image imports
import img1 from "./gimages/img1.jpg";
import img2 from "./gimages/img2.JPEG";
import img3 from "./gimages/img3.jpg";
import img4 from "./gimages/img4.jpg";
import img5 from "./gimages/img5.jpeg";
import img6 from "./gimages/img6.jpeg";
import img7 from "./gimages/img7.jpeg";
import img8 from "./gimages/img8.jpg";
import img9 from "./gimages/img9.jpg";
import img10 from "./gimages/img10.jpg";
import img11 from "./gimages/img11.jpg";
import img12 from "./gimages/img12.jpg";
import img13 from "./gimages/img13.JPG";
import img14 from "./gimages/img14.jpeg";
import img15 from "./gimages/img15.jpg";
import img16 from "./gimages/img16.jpg"; // Mango Mist 2017
import img17 from "./gimages/img17.jpg"; // Mathew Visit 2022
import img18 from "./gimages/img18.JPG"; // Mens Day 2024
import img19 from "./gimages/img19.jpg"; // Valentine Day 2019
import img20 from "./gimages/img20.JPG"; // Womens Day 2024

// Map your data to the imported images
const imageData = [
  { id: 1, src: img1, title: "Christmas Day", year: "2024" },
  { id: 2, src: img2, title: "Diwali", year: "2023" },
  { id: 3, src: img3, title: "Independence Day", year: "2022" },
  { id: 4, src: img4, title: "Ethnic Day", year: "2022" },
  { id: 5, src: img5, title: "Global Connect", year: "2025" },
  { id: 6, src: img6, title: "Diwali", year: "2026" },
  { id: 7, src: img7, title: "Diwali", year: "2026" },
  { id: 8, src: img8, title: "Outing", year: "2025" },
  { id: 9, src: img9, title: "Independence Day", year: "2023" },
  { id: 10, src: img10, title: "Global Connect", year: "2025" },
  { id: 11, src: img11, title: "Global Connect", year: "2025" },
  { id: 12, src: img12, title: "Snow Day", year: "2025" },
  { id: 13, src: img13, title: "Christmas Day", year: "2025" },
  { id: 14, src: img14, title: "Outing", year: "2025" },
  { id: 15, src: img15, title: "Independence Day Celebrations", year: "2024" },
  { id: 16, src: img16, title: "Mango Mist", year: "2017" },
  { id: 17, src: img17, title: "Mathew's Visit", year: "2022" },
  { id: 18, src: img18, title: "Men's Day", year: "2024" },
  { id: 19, src: img19, title: "Valentine's Day", year: "2019" },
  { id: 20, src: img20, title: "Women's Day Celebrations", year: "2024" },
];

// ==========================================
// ✨ Isolated Image Card Component
// ==========================================
const ImageCard = ({ img, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`gl-bento-item gl-span-${(index % 4) + 1}`}
      onClick={onClick}
    >
      <div className="gl-image-container">
        
        {/* Shimmer Skeleton (Shows while image is loading) */}
        {!isLoaded && <div className="gl-shimmer-skeleton"></div>}

        <img 
          src={img.src} 
          alt={img.title} 
          className={`gl-actual-img ${isLoaded ? 'gl-img-loaded' : 'gl-img-hidden'}`}
          loading="lazy" 
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Elegant Gradient Hover */}
        <div className="gl-hover-overlay">
          <div className="gl-hover-text">
            <span className="gl-meta-title">{img.title}</span>
            <span className="gl-meta-year">{img.year}</span>
          </div>
          <ArrowUpRight size={28} className="gl-icon" />
        </div>

      </div>
    </div>
  );
};

// ==========================================
// Main Gallery Component
// ==========================================
export default function Gallery() {
  const [popupIndex, setPopupIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState("All");
  const galleryRef = useRef(null);

  const years = ["All", ...new Set(imageData.map((img) => img.year))].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return b - a;
  });

  const filteredImages = selectedYear === "All" 
    ? imageData 
    : imageData.filter((img) => img.year === selectedYear);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);
  
  const showPrev = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gl-reveal");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gl-bento-item");
      items.forEach((item) => observer.observe(item));
    }
    
    return () => observer.disconnect();
  }, [filteredImages]);

  return (
    <section className="gl-page-root">
      
      {/* Sleek Professional Header */}
      <header className="gl-header-left">
        <div className="gl-header-content">
          <h1 className="gl-label">Inside HGSI</h1>
          <p className="gl-subtitle">
            A visual chronicle of the energy, dedication, and vibrant community 
            driving our success every single day.
          </p>
        </div>
        
        {/* Year Filter Pills */}
        <div className="gl-filter-tabs">
          {years.map((year) => (
            <button 
              key={year} 
              className={`gl-filter-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </header>

      {/* Modern Bento Grid using the isolated ImageCard */}
      <div className="gl-bento-grid" ref={galleryRef}>
        {filteredImages.map((img, index) => (
          <ImageCard 
            key={img.id} 
            img={img} 
            index={index} 
            onClick={() => openPopup(index)} 
          />
        ))}
      </div>

      {/* Glassmorphism Popup */}
      {popupIndex !== null && filteredImages[popupIndex] && (
        <div className="gl-popup-overlay" onClick={closePopup}>
          <button className="gl-close-btn" onClick={closePopup}><X size={36} /></button>
          
          <button className="gl-nav-btn gl-left" onClick={showPrev}><ChevronLeft size={44} /></button>
          
          <div className="gl-popup-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredImages[popupIndex].src} 
              alt={filteredImages[popupIndex].title} 
              className="gl-enlarged-img" 
            />
            <div className="gl-popup-caption">
              <h2>{filteredImages[popupIndex].title}</h2>
              <span>{filteredImages[popupIndex].year}</span>
            </div>
          </div>

          <button className="gl-nav-btn gl-right" onClick={showNext}><ChevronRight size={44} /></button>
        </div>
      )}

    </section>
  );
}