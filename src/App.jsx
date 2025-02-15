import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Search from "./components/Search";
import Cast from "./components/Cast";
import Main from "./components/Main";
import Forcast from "./components/Forcast";
import AirCondition from "./components/AirCondition";
import Intro from "./components/Intro";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cast" element={<Cast />} />
      </Routes>
    </>
  );
};

export default App;
