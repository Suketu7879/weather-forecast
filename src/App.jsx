import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Cast from "./components/Cast";
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
