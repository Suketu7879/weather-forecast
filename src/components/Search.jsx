import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context.jsx";
import axios from "axios";

const Search = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const { data, setData } = useContext(AppContext);
  const fRef = useRef();

  const HandleClick = async (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: `${city}`,
        days: "1",
      },
      headers: {
        "x-rapidapi-key": "162e4f673dmsh7624fedf27d893fp12dc98jsnbb5e851e8f14",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
      navigate("/cast");
    } catch (error) {
      console.error(error);
    }
    setCity("");
  };

  return (
    <div>
      <div>
        <form
          // action="#"
          className=" flex justify-center items-center "
          onSubmit={(e) => {
            e.preventDefault();
          }}
          ref={fRef}
        >
          <input
            type="text"
            value={city}
            placeholder="search for cities"
            onChange={(e) => setCity(e.target.value)}
            className="bg-slate-800 h-18 w-[90%] m-2 p-6 rounded text-white border-none"
          />
          <button
            className="h-18 w-[8%] bg-slate-700 p-6 rounded text-white"
            onClick={(e) => HandleClick(e)}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
