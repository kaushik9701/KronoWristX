import React from 'react';

const SensorsFeature = () => {
  return (
    <div className="w-full min-h-screen pt-28 flex flex-col justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold pb-20">
  Health Monitoring
</h1>

      <div className="flex flex-col lg:ml-96 space-y-8 w-full max-w-3xl">
        <div className="flex flex-col
         sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6
         ">
          <div className="w-24 h-24 flex items-center justify-center">
            <img src="heart.png" alt="Heart Rate Sensor" className="w-16 h-16 object-cover rounded-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Heart Rate Sensor</h3>
            <p className="text-sm sm:text-base opacity-80">
              Tracks your heart rate throughout the day and during workouts.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="w-24 h-24 flex items-center justify-center">
            <img src="o2.webp" alt="Blood Oxygen Sensor" className="w-16 h-16 object-cover rounded-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Blood Oxygen Sensor</h3>
            <p className="text-sm sm:text-base opacity-80">
              Measures the oxygen level in your blood, helping monitor your health.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="w-24 h-24 flex items-center justify-center">
            <img src="ecg.png" alt="ECG Sensor" className="w-16 h-16 object-cover rounded-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">ECG Sensor</h3>
            <p className="text-sm sm:text-base opacity-80">
              Records an electrocardiogram, giving insight into your heart’s rhythm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorsFeature;
