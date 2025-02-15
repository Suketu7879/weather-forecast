import React from "react";
import Search from "./Search";
import Intro from "./Intro";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-6">
      <div className="w-full max-w-2xl">
        <Search />
        <Intro />
      </div>
      <div className="flex justify-center w-full">
        <img
          src={logo} 
          alt="Weather Illustration"
          className="w-40 md:w-52 mt-4"
        />
      </div>
    </div>
  );
};

export default Home;
