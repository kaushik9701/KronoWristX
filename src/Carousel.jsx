import React from 'react';
import Slider from 'react-slick'; 
import './App.css'; 

const WatchFeatureCarousel = () => {
  const settings = {
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto text-center pt-20 sm:pt-16">
      <h2 className="text-4xl lg:p-32 sm:p-8 sm:text-3xl mb-8 text-white font-bold ">Explore the Features of Our Smartwatch</h2>
      <Slider {...settings}>
        <div className="relative flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <img src="ultra.jpg" alt="Feature 1" className="w-full max-h-[500px] object-cover rounded-[12px] transition-transform duration-300 ease-in-out" />
          <div className="absolute lg:bottom-5 bottom-52 left-1/2 transform -translate-x-1/2 w-4/5 bg-black bg-opacity-60 text-white py-4 px-5 rounded-lg text-center">
            <h3 className="text-2xl sm:text-xl mb-2 font-semibold">Advanced Display</h3>
            <p className="text-base sm:text-sm leading-relaxed">Experience stunning clarity with the latest OLED screen technology, perfect for every lighting condition.</p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <video src="carou1.mp4" className="w-full max-h-[500px] object-cover rounded-[12px] transition-transform duration-300 ease-in-out" autoPlay loop muted/>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-4/5 bg-black bg-opacity-60 text-white py-4 px-5 rounded-lg text-center">
            <h3 className="text-2xl sm:text-xl mb-2 font-semibold">Waterproof</h3>
            <p className="text-base sm:text-sm">Take it anywhere, from the gym to the pool, with its waterproof design.</p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <img src="ultra2.jpg" alt="Feature 2" className="w-full max-h-[500px] object-cover rounded-[12px] transition-transform duration-300 ease-in-out" />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-4/5 bg-black bg-opacity-60 text-white py-4 px-5 rounded-lg text-center">
            <h3 className="text-2xl sm:text-xl mb-2 font-semibold">Fitness Tracking</h3>
            <p className="text-base sm:text-sm ">Track your workouts, steps, calories burned, and more with built-in sensors and fitness modes.</p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <img src="watchcarousel.webp" alt="Feature 3" className="w-full max-h-[500px] object-cover rounded-[12px] transition-transform duration-300 ease-in-out" />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-4/5 bg-black bg-opacity-60 text-white py-4 px-5 rounded-lg text-center">
            <h3 className="text-2xl sm:text-xl mb-2 font-semibold">Long Battery Life</h3>
            <p className="text-base sm:text-sm ">Stay powered for days with an efficient battery life that supports your busy schedule.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default WatchFeatureCarousel;
