import React, { useContext } from "react";
import Search from "./Search";
import Main from "./Main";
import Forcast from "./Forcast";
import AirCondition from "./AirCondition";
import { AppContext } from "../context";
import Intro from "./Intro";

const Cast = () => {
  const { data } = useContext(AppContext);
  return (
    <div className="flex p-2">
      <div className="w-[70%]">
        <div className="">
          <Search />
        </div>
        {data ? (
          <div>
            <Main />
            <AirCondition />
          </div>
        ) : (
          <Intro />
        )}
      </div>
      {data ? (
        <div className="w-[30%]">
          <Forcast />
        </div>
      ) : (
        <div className="w-[30%]"></div>
      )}
    </div>
  );
};

export default Cast;
