import React from "react";

const Intro = () => {
  return (
    <div className="m-3 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Description</h1>
        <p className="text-lg md:text-xl mb-4">
          Welcome to the Weather Forecast App! Stay updated with real-time weather details for any location worldwide. 
          Simply enter a city name in the search bar above to get instant weather updates.
        </p>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">Features</h2>
        <ul className="text-lg space-y-2">
          <li><span className="font-semibold">🌡 Temperature:</span> Get current temperature, high & low.</li>
          <li><span className="font-semibold">💧 Humidity:</span> Know the moisture levels.</li>
          <li><span className="font-semibold">💨 Wind Speed & Direction:</span> Stay updated on wind conditions.</li>
          <li><span className="font-semibold">🌅 Sunrise & Sunset:</span> Find out exact times.</li>
          <li><span className="font-semibold">☀️ UV Index:</span> Protect yourself from harmful rays.</li>
          <li><span className="font-semibold">🌧 Chance of Rain:</span> Check precipitation probability.</li>
          <li><span className="font-semibold">🔭 Visibility:</span> Know atmospheric clarity.</li>
          <li><span className="font-semibold">📅 Today's Forecast:</span> Hourly breakdown of weather.</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
