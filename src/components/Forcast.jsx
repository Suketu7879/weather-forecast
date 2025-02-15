import React, { useContext } from "react";
import { AppContext } from "../context";

const Forcast = () => {
  const { data } = useContext(AppContext);
  const { hour } = data.forecast.forecastday[0];

  return (
    <div className="text-white bg-gray-700 font-bold rounded-3xl p-5 m-2">
      <div className="text-2xl text-center md:text-left">TODAY'S FORECAST</div>
      <div className="flex flex-wrap md:flex-col gap-4 overflow-x-auto md:overflow-visible items-center py-4">
        {hour.map((info, idx) => (
          <div key={idx} className="flex flex-col items-center md:w-full">
            <div className="flex items-center gap-4 w-auto">
              <p className="text-lg text-white opacity-60">{info.time.split(" ")[1]}</p>
              <img src={info.condition.icon} alt="icon" className="w-12" />
              <p className="text-xl">{info.temp_c}° C</p>
            </div>
            <div className="h-[1px] w-24 md:w-full bg-white opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forcast;
