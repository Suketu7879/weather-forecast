import React, { useContext } from "react";
import { AppContext } from "../context";

const Main = () => {
  const { data } = useContext(AppContext);
  return (
    <div>
      {/* first card */}
      <div>
        <div className="flex text-white font-bold h-42 justify-between px-20 py-18 m-2 rounded-3xl items-center">
          <div className=" flex flex-col items-start ">
            <div>
              <div>
                {data.location.name}, {data.location.region}
              </div>
              <div className="font-light flex items-center">
                <span className="opacity-60 mr-3">
                  visibility {data.current.vis_km} KM{" "}
                </span>
              </div>
            </div>
            <div className="my-3 text-4xl">{data.current.temp_c}° C</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={data.current.condition.icon}
              alt="condition image"
              className="w-28"
            />
            <p className="mb-7">{data.current.condition.text}</p>
          </div>
        </div>
      </div>
      {/* second card */}
      <div className="flex bg-gray-700 text-white font-bold h-42 justify-between px-20 py-28 m-2 rounded-3xl items-center">
        <div className="flex flex-col items-center font-semibold">
          <img src="src/assets/rise.png" alt="rise" className="w-28" />
          <p>{data.forecast.forecastday[0].astro.sunrise}</p>
        </div>
        <div className="flex flex-col items-center font-semibold">
          <img src="src/assets/set.png" alt="" className="w-28" />
          <p>{data.forecast.forecastday[0].astro.sunset}</p>
        </div>
        <div className="flex flex-col items-center font-semibold">
          <img src="src/assets/moonrise.png" alt="rise" className="w-18 mt-2" />
          <p className="mt-4">{data.forecast.forecastday[0].astro.moonrise}</p>
        </div>
        <div className="flex flex-col items-center font-semibold">
          <img src="src/assets/moonset.png" alt="" className="w-18 mt-2" />
          <p className="mt-4">{data.forecast.forecastday[0].astro.moonset}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
