
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context.jsx";
import axios from "axios";

const Search = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const { setData } = useContext(AppContext);
  const fRef = useRef();

  const HandleClick = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    let res = await axios.get("https://wheather-il9t.onrender.com/apikey");

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: city, days: "1" },
      headers: {
        "x-rapidapi-key": res.data,
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
      navigate("/cast");
    } catch (error) {
      console.error(error);
    }
    setCity("");
  };

  return (
    <div className="w-full flex justify-center items-center p-4">
      <form
        className="flex w-full max-w-2xl gap-2"
        onSubmit={(e) => e.preventDefault()}
        ref={fRef}
      >
        <input
          type="text"
          value={city}
          placeholder="Search for cities..."
          onChange={(e) => setCity(e.target.value)}
          className="bg-slate-800 h-12 w-full p-4 rounded-lg text-white outline-none"
        />
        <button
          className="h-12 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={HandleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
