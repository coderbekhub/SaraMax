import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./slider.scss";
import SliderImg1 from "../img/1.jpg";
import SliderImg2 from "../img/2.jpg";
import SliderImg3 from "../img/3.jpg";
import SliderImg4 from "../img/4.png";
import SliderImg5 from "../img/5.png";
import SliderImg6 from "../img/6.png";

const cards = [
  {
    image: SliderImg1,
    title: { uz: "O‘lchami: 30×38x30 sm", ru: "O‘lchami: 30×38x30 sm", en: "O‘lchami: 30×38x30 sm" },
    description: { uz: "Ogʻirligi : 10 kg", ru: "Ogʻirligi : 10 kg", en: "Ogʻirligi : 10 kg" },
  },
  {
    image: SliderImg2,
    title: { uz: "O‘lchami: 45×38x32 sm", ru: "O‘lchami: 45×38x32 sm", en: "O‘lchami: 45×38x32 sm" },
    description: { uz: "Ogʻirligi : 12.5 kg", ru: "Ogʻirligi : 12.5 kg", en: "Ogʻirligi : 12.5 kg" },
  },
  {
    image: SliderImg3,
    title: { uz: "O‘lchami: 45×38x32 sm", ru: "O‘lchami: 45×38x32 sm", en: "O‘lchami: 45×38x32 sm" },
    description: { uz: "Ogʻirligi : 12.5 kg", ru: "Ogʻirligi : 12.5 kg", en: "Ogʻirligi : 12.5 kg" },
  },
  {
    image: SliderImg5,
    title: { uz: "O‘lchami: 30x40×30 sm", ru: "O‘lchami: 30x40×30 sm", en: "O‘lchami: 30x40×30 sm" },
    description: { uz: "Ogʻirligi : 15kg", ru: "Ogʻirligi : 15 kg", en: "Ogʻirligi : 15 kg" },
  },
  {
    image: SliderImg4,
    title: { uz: "O‘lchami: 45×38x32 sm", ru: "O‘lchami: 45×38x32 sm", en: "O‘lchami: 45×38x32 sm" },
    description: { uz: "Ogʻirligi : 12.5 kg", ru: "Ogʻirligi : 12.5 kg", en: "Ogʻirligi : 12.5 kg" },
  },
  {
    image: SliderImg6,
    title: { uz: "O‘lchami: 50×40×40sm", ru: "O‘lchami: 50×40×40 sm", en: "O‘lchami: 50×40×40 sm" },
    description: { uz: "Ogʻirligi : 60kg Qumli", ru: "Ogʻirligi : 60 kg", en: "Ogʻirligi : 60 kg" },
  },
];

const CardSlider = ({ language = "uz" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cards[(currentIndex + i) % cards.length]);
    }
    return visible;
  };

  return (
    <div className="card-slider">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="cards-container">
        <AnimatePresence>
          {getVisibleCards().map((card, idx) => (
            <motion.div
              key={currentIndex + idx}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <img src={card.image} alt={card.title[language]} />
              <h3>{card.title[language]}</h3>
              <p>{card.description[language]}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default CardSlider;
