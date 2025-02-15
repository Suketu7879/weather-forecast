import React from "react";
import Search from "./Search";
import Intro from "./Intro";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div>
      <div className="flex p-2">
        <div className="w-[70%]">
          <div className="">
            <Search />
          </div>
          <div>
            <Intro />
          </div>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="" className="mt-24" />
        </div>
      </div>
    </div>
  );
};

export default Home;
