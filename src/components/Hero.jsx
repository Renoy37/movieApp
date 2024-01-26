import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieDetails from "./MovieDetails";

export const Hero = () => {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showMovieDetails, setShowMovieDetails] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://moviesverse1.p.rapidapi.com/movies/movieBySearch/1?search=${name}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "fee6951ae5mshc33bf0a532729ecp12739ejsnfa053e4cf6b9",
            "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const searchData = await response.json();
      setSearchResults(searchData.movies);
    } catch (error) {
      setError(error);
    }

    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setShowMovieDetails(true);
  };

  const handleBackToSearchResults = () => {
    setShowMovieDetails(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className="search-container">
        <div>
          <h1 className="form-title">Search Movies And Tv Shows</h1>
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

      {/* Conditionally render search results or movie details */}
      {showMovieDetails ? (
        <div className="movie-details-container">
          <MovieDetails movie={selectedMovie} />
          <button onClick={handleBackToSearchResults} className="back-btn">
            Back to Search Results
            <svg
              className="iconify-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                d="M6 12.4h12M12.6 7l5.4 5.4l-5.4 5.4"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <div className="search-results">
          <h2 className="search-name">Search Results</h2>
          <ul className="general-container">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="movies"
                onClick={() => handleSelectMovie(result)}
              >
                <img src={result.img} alt={result.text} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Displaying the error if there is any */}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
