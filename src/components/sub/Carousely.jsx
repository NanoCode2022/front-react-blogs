import { useState, useEffect } from 'react';

export const Carousely = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/banner.png',
    '/banner.png',
    '/banner.png',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambio de imagen cada 5 segundos (5000 ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:w-1/2 w-full">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out transform">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={`w-full flex-shrink-0 h-64 md:h-80 lg:h-96 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-80 text-white-50 px-3 py-1 rounded-full"
        onClick={prevSlide}
      >
        <img src="/arrow-left.svg" alt="arrow-left" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-80 text-white-50 px-3 py-1 rounded-full"
        onClick={nextSlide}
      >
        <img src="/arrow-right.svg" alt="arrow-right" />
      </button>
    </div>
  );
};
