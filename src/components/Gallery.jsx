import React, { useState } from "react";
import "./slider.scss";
import GalleryImg1 from "../img/1.jpg";
import GalleryImg2 from "../img/2.jpg";
import GalleryImg3 from "../img/7.png";
import GalleryImg4 from "../img/8.png";
import GalleryImg5 from "../img/9.png";
import GalleryImg6 from "../img/10.png";

const galleryData = [
  {
    id: 1,
    image: GalleryImg1,
    title: "O‘lchami: 30×38x30 sm",
    description: "Zamonaviy va premium dizayn loyihasi",
  },
  {
    id: 2,
    image: GalleryImg2,
    title: "O‘lchami: 45×38x32 sm",
    description: "Innovatsion UI/UX yechim",
  },
  {
    id: 3,
    image: GalleryImg3,
    title: "Razmer:100×50×40sm",
    description: "Minimal va professional web sayt",
  },
  {
    id: 4,
    image: GalleryImg4,
    title: "Razmer:100×50×40sm",
    description: "Biznes uchun kuchli platforma",
  },
  {
    id: 5,
    image: GalleryImg5,
    title: "O‘lchami: 70x50×40 sm",
    description: "Premium brending va dizayn",
  },
  {
    id: 6,
    image: GalleryImg6,
    title: "O‘lchami: 68x50×47sm",
    description: "Zamonaviy texnologiyalar asosida",
  },
];

const INITIAL_COUNT = 3;

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isExpanded = visibleCount >= galleryData.length;

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_COUNT); // qisqartirish
    } else {
      setVisibleCount(galleryData.length); // ko‘proq
    }
  };

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {galleryData.slice(0, visibleCount).map((item) => (
          <div className="gallery-card" key={item.id}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more">
        <button onClick={handleToggle}>
          {isExpanded ? "Qisqartirish" : "Ko‘proq"}
        </button>
      </div>
    </section>
  );
};

export default Gallery;
