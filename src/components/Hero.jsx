import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Hero = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);

    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <div>
          <h1 className="form-title">Search Movies And Tv SHows</h1>
          <div className="search">
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="movieName"
                value={name}
                onChange={handleChange}
                placeholder="Enter movie or TV show name"
                className="input-box"
              />
              <button type="submit" className="input-btn">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
