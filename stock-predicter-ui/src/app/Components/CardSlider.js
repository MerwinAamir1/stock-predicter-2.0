"use client";
import React, { useState } from "react";

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: "https://source.unsplash.com/random",
      title: "Card 1",
      description: "Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random",
      title: "Card 2",
      description: "Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random",
      title: "Card 3",
      description: "Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random",
      title: "Card 4",
      description: "Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random",
      title: "Card 5",
      description: "Info which directs to the other page.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="flex flex-col justify-end h-screen">
      <div className="w-11/12 mb-4">
        <div className="relative">
          <div className="flex space-x-4">
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <div
                className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md"
                key={index}
              >
                <img
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                  src={card.image}
                  alt="Card"
                />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              className="w-6 h-6 rounded-full bg-gray-300"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 rounded-full bg-gray-300"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
