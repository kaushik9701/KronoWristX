import React from 'react';

const Navbar = ({ scrollPosition }) => {
  const textColor = scrollPosition >= 0.136 ? 'text-white' : 'text-black';
  const imgBgColor = scrollPosition >= 0.136 ? 'bg-white' : 'bg-black bg-opacity-30';
  const handleContactClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,  
      behavior: 'smooth',  
    });
  };

  return (
    <header className="fixed w-full py-3 mt-2 z-10 sm:px-10 px-5 flex justify-between items-center bg-black bg-opacity-20 rounded-full">
      <nav className="flex w-full items-center">
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Logo" className={`w-12 h-12 p-2 rounded-full ${imgBgColor}`} />
        </div>
        <div className="hidden sm:flex flex-1 justify-center">
          <a
            className={`px-5 mt-1 text-2xl font-black ${textColor} hover:text-[#b38b2d] hover:scale-105 hover:underline hover:underline-offset-4 transition-all duration-300`}
            href="#Home"
          >
            Home
          </a>
          <a
            className={`px-5 mt-1 text-2xl font-black ${textColor} hover:text-[#b38b2d] hover:scale-105 hover:underline hover:underline-offset-4 transition-all duration-300`}
            href="#Products"
          >
            Products
          </a>
          <a
            className={`px-5 mt-1 text-2xl font-black ${textColor} hover:text-[#b38b2d] hover:scale-105 hover:underline hover:underline-offset-4 transition-all duration-300`}
            href="#Contact"
            onClick={handleContactClick}
          >
            Contact
          </a>
        </div>
        <div className="ml-auto flex items-center space-x-4 rounded-full bg-black p-4">
          <img className="hover:scale-150 transition-transform duration-300" src="/bag.svg" alt="bag" />
          <img className="hover:scale-150 transition-transform duration-300" src="/search.svg" alt="search" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
