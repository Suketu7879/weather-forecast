import React, { useContext } from "react";
import { AppContext } from "../context";

const AirCondition = () => {
  const { data } = useContext(AppContext);

  return (
    <div>
      <div className="text-white bg-gray-700 font-bold rounded-3xl p-9 m-2">
        <div>Air Condition</div>
        <div className="flex justify-between items-center py-24 px-7 h-40">
          <div className="flex flex-col gap-10">
            <div>
              <div className="opacity-60 font-normal">Feels like</div>
              <div className="text-2xl">{data.current.feelslike_c}° C</div>
            </div>
            <div>
              <div className="opacity-60 font-normal">UV</div>
              <div className="text-2xl">{data.current.uv}</div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <div className="opacity-60 font-normal">Wind</div>
              <div className="text-2xl">{data.current.wind_kph} KM</div>
            </div>
            <div>
              <div className="opacity-60 font-normal">Wind direction</div>
              <div className="text-2xl">{data.current.wind_dir}</div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <div className="opacity-60 font-normal">Humidity</div>
              <div className="text-2xl">{data.current.humidity}%</div>
            </div>
            <div>
              <div className="opacity-60 font-normal">Chance of rain</div>
              <div className="text-2xl">
                {data.forecast.forecastday[0].day.daily_chance_of_rain}%
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <div className="opacity-60 font-normal">Pressure</div>
              <div className="text-2xl">{data.current.pressure_mb} mb</div>
            </div>
            <div>
              <div className="opacity-60 font-normal">Precipitation </div>
              <div className="text-2xl">{data.current.precip_mm} mm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirCondition;
