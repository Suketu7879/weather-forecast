import React, { useContext } from "react";
import { AppContext } from "../context";

const AirCondition = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="text-white bg-gray-700 font-bold rounded-3xl p-6 m-2">
      <div className="text-2xl text-center md:text-left">Air Condition</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
        {[
          { label: "Feels like", value: `${data.current.feelslike_c || 0}° C` },
          { label: "UV", value: data.current.uv || 0 },
          { label: "Wind", value: `${data.current.wind_kph || 0} KM` },
          { label: "Wind direction", value: data.current.wind_dir || 0 },
          { label: "Humidity", value: `${data.current.humidity || 0}%` },
          {
            label: "Chance of rain",
            value: `${
              data.forecast.forecastday[0].day.daily_chance_of_rain || 0
            }%`,
          },
          { label: "Pressure", value: `${data.current.pressure_mb || 0} mb` },
          {
            label: "Precipitation",
            value: `${data.current.precip_mm || 0} mm`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:items-start"
          >
            <div className="opacity-60 font-normal">
              {item.label || "label"}
            </div>
            <div className="text-xl">{item.value || 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirCondition;
