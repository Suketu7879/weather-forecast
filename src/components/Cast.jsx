


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
    <div className="flex flex-col md:flex-row p-4">
      <div className="w-full md:w-2/3">
        <Search />
        {data ? (
          <>
            <Main />
            <AirCondition />
          </>
        ) : (
          <Intro />
        )}
      </div>
      {data && (
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <Forcast />
        </div>
      )}
    </div>
  );
};

export default Cast;
