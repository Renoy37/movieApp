import React, { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import Loading from "./Loading";
import { PiMonitorPlayFill } from "react-icons/pi";

export const Trending = () => {
  // Defining the state variables to store the data and selected movie
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading indicator
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const fetchData = async () => {
    setIsLoading(true); // Set loading to true when fetching data

    const url = "https://moviesverse1.p.rapidapi.com/movies/1";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fee6951ae5mshc33bf0a532729ecp12739ejsnfa053e4cf6b9",
          "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false); // Set loading to false after data is fetched
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1 className="movie-title">Trending Movies</h1>

      {error && <p>Error fetching data: {error.message}</p>}

      {isLoading ? (
        <Loading />
      ) : selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <div className="general-container">
          {data &&
            data.movies.map((movie) => (
              <div
                key={movie.id}
                className={`movie-details ${
                  hoveredMovie === movie.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
                onClick={() => handleMovieClick(movie)}
              >
                <li className="movie-list">
                  <div className="movies">
                    <img src={movie.img} alt={movie.text} />
                    {hoveredMovie === movie.id && (
                      <div className="overlay">
                        <button className="play-button">
                          <PiMonitorPlayFill />
                        </button>
                      </div>
                    )}
                    {/* <p>{movie.text}</p> */}
                  </div>
                </li>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
