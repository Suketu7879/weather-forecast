import React, { useContext } from "react";
import { AppContext } from "../context";

const Forcast = () => {
  const { data } = useContext(AppContext);
  const { hour } = data.forecast.forecastday[0];
  return (
    <div className="text-white bg-gray-800 font-bold rounded-3xl p-5 m-2">
      <div className="m-3 ">TODAY'S FORECAST</div>
      <div className="flex overflow-auto flex-col items-center h-[695px]">
        {hour.map((info, idx) => {
          return (
            <div key={idx} className="flex flex-col">
              <div className="m-3 flex items-center w-20 gap-10">
                {/* time */}
                <p className="text-lg text-white opacity-60 ">
                  {info.time.split(" ")[1]}
                </p>
                {/* icon */}
                <img src={info.condition.icon} alt="icon" className="my-2" />
                {/* temperature */}
                <p className="text-xl">{info.temp_c}° C</p>
              </div>
              <div className="h-[0.1px] w-60 bg-white m-3 "></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Forcast;