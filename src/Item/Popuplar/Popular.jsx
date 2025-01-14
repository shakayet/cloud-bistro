import React, { useState, useEffect } from "react";
import Modal from '../../Modal/Modal';
import img1 from "../../../public/photo/pop1.jpg";
import img2 from "../../../public/photo/pop2.jpg";
import img3 from "../../../public/photo/pop3.jpg";
import img4 from "../../../public/photo/pop4.jpg";
import img5 from "../../../public/photo/pop5.jpg";
import img6 from "../../../public/photo/pop6.jpg";
import img7 from "../../../public/photo/pop7.jpg";
import img8 from "../../../public/photo/pop8.jpg";
import img9 from "../../../public/photo/pop9.jpg";
import img10 from "../../../public/photo/pop10.jpg";

const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleCards = 3;
  const slideInterval = 3000;

  const slides = [
    { image: img1, title: "Title 1", description: "Description 1" },
    { image: img2, title: "Title 2", description: "Description 2" },
    { image: img3, title: "Title 3", description: "Description 3" },
    { image: img4, title: "Title 4", description: "Description 4" },
    { image: img5, title: "shrimp", description: "Description 5" },
    { image: img6, title: "Title 5", description: "Description 6" },
    { image: img7, title: "Title 5", description: "Description 7" },
    { image: img8, title: "Title 5", description: "Description 8" },
    { image: img9, title: "Title 5", description: "Description 9" },
    { image: img10, title: "Title 5", description: "Description 10" },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, slideInterval);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const visibleSlides = slides.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  if (visibleSlides.length < visibleCards) {
    visibleSlides.push(
      ...slides.slice(0, visibleCards - visibleSlides.length)
    );
  }

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div className="popular-carousel">
      {/* Header */}
      <h3 className="text-center font-bold text-4xl text-black mt-10 mb-6">
        Our Popular Items
      </h3>
      <p className="text-center text-gray-500 text-sm mb-8">
        Handpicked items just for you!
      </p>

      <div className="relative w-full max-w-6xl mx-auto mt-5 overflow-hidden">
        <div className="flex items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8249;
          </button>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-1/3 p-2 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto rounded-lg filter transition duration-300 ease-in-out hover:blur-sm"
                  />
                  {/* Hover Button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300"
                    onClick={() => openModal(slide)}
                  >
                    <button className="bg-gray-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                      View Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
    </div>
  );
};

export default Popular;
