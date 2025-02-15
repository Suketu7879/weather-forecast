import React from "react";

const Intro = () => {
  return (
    <div className=" m-3 p-5">
      <div>
        <div className="text-3xl font-bold">Desciption</div>
        <div>
          <p className="text-xl m-2">
            Welcome to the Weather Forecast App! Stay updated with real-time
            weather details for any location worldwide. Simply enter a city name
            in the search bar above to get instant weather updates.
          </p>
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold">Features</div>
        <div className="text-xl m-2 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Temperature:</span> Get the current
            temperature along with the day's high and low.
          </p>
          <p>
            <span className="font-semibold">Humidity:</span> Know the moisture
            levels in the air.
          </p>
          <p>
            <span className="font-semibold">Wind Speed & Direction:</span> Stay
            informed about wind conditions.
          </p>
          <p>
            <span className="font-semibold">Sunrise & Sunset:</span> Find out
            the exact time of sunrise and sunset for your location.
          </p>
          <p>
            <span className="font-semibold">UV Index:</span> Protect yourself by
            checking the UV radiation levels.
          </p>
          <p>
            <span className="font-semibold">Chance of Rain:</span> See the
            probability of precipitation throughout the day.
          </p>
          <p>Visibility: Get insights into the clarity of the atmosphere.</p>
          <p>
            <span className="font-semibold">Today's Forecast:</span> A detailed
            breakdown of the weather throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
