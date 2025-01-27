import React, { useEffect, useState } from 'react';

const WatchUsageScenarios = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scenarios = [
    {
      title: "Swimming",
      description: "Track your performance even underwater with the waterproof design.",
      image: "util3.jpg",
    },
    {
      title: "Running",
      description: "Monitor your pace, distance, and calories burned during your run.",
      image: "util1.jpg",
    },
    {
      title: "Diving",
      description: "Go deep into the water with dive-specific tracking features.",
      image: "util5.jpg",
    },
    {
      title: "Cycling",
      description: "Track your route, speed, and endurance on every ride.",
      image: "util2.jpg",
    },
  ];
  const parallaxSpeed = 0.45;
  
  return (
    <div className="w-full py-16 px-8 bg-black text-white">
      <h2 className="text-3xl sm:text-4xl pt-28 pb-16 font-bold text-center mb-12">
      "Unlock Your Potential: Smartwatch for Every Sport"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {scenarios.map((scenario, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center overflow-hidden">
            <div
              className="w-full h-[500px] sm:h-[600px] lg:h-[700px] bg-cover bg-center rounded-lg object-cover"
              style={{
                backgroundImage: `url(${scenario.image})`,
                backgroundPosition: `${(scrollY * parallaxSpeed) + 100}px center`,
                willChange: 'background-position',
              }}
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-4/5 sm:w-3/4 bg-black bg-opacity-60 text-white py-4 px-5 rounded-lg text-center">
              <h3 className="text-lg sm:text-2xl font-semibold mb-2">{scenario.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed">{scenario.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchUsageScenarios;
