import React from "react";

const ProductPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-black text-white">
      {/* Left Section - Image or 3D Model */}
      <div className="w-full sm:w-2/5 bg-black flex justify-center items-center">
        {/* You can add your image or 3D model here */}
      </div>

      {/* Right Section - Text and Product Details */}
      <div className="w-full sm:w-3/5 p-8 sm:p-16 flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          KRONO Wrist X
        </h1>
        <p className="text-base sm:text-lg mb-4 sm:mb-6">
          Unleash your potential with the all-new KRONO Wrist X. Stay connected, track your fitness, and experience seamless integration with your lifestyle.
        </p>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc list-inside">
            <li>Waterproof for up to 50 meters</li>
            <li>24/7 heart rate monitoring</li>
            <li>Advanced sleep tracking</li>
            <li>Customizable watch faces</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <p className="text-xl sm:text-2xl font-semibold">$3999.99</p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg mt-4 sm:mt-0">
            Buy Now
          </button>
        </div>

        <div className="text-sm text-gray-400">
          <p>Shipping available worldwide. Free returns within 30 days.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
