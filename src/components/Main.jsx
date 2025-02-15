

import React, { useContext } from "react";
import { AppContext } from "../context";
import rise from "../assets/rise.png";
import set from "../assets/set.png";
import moonrise from "../assets/moonrise.png";
import moonset from "../assets/moonset.png";

const Main = () => {
  const { data } = useContext(AppContext);

  return (
    <div>
      {/* Temperature Card */}
      <div className="flex flex-col md:flex-row bg-gray-800 text-white font-bold rounded-3xl p-6 m-2 items-center md:justify-between">
        <div className="text-center md:text-left">
          <div>{data.location.name}, {data.location.region}</div>
          <div className="font-light opacity-60">Visibility: {data.current.vis_km} KM</div>
          <div className="text-4xl mt-2">{data.current.temp_c}° C</div>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <img src={data.current.condition.icon} alt="condition" className="w-24" />
          <p className="mt-2">{data.current.condition.text}</p>
        </div>
      </div>

      {/* Astro Data */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-gray-700 text-white font-bold p-6 m-2 rounded-3xl text-center">
        {[
          { label: "Sunrise", value: data.forecast.forecastday[0].astro.sunrise, icon: rise },
          { label: "Sunset", value: data.forecast.forecastday[0].astro.sunset, icon: set },
          { label: "Moonrise", value: data.forecast.forecastday[0].astro.moonrise, icon: moonrise },
          { label: "Moonset", value: data.forecast.forecastday[0].astro.moonset, icon: moonset },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.icon} alt={item.label} className="w-20" />
            <p className="mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
