import React, { useState, useEffect } from "react";

export const More = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchMore = async () => {
    const url = "https://movies-api14.p.rapidapi.com/movies";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fee6951ae5mshc33bf0a532729ecp12739ejsnfa053e4cf6b9",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <div>
      <h1>You may also like</h1>
      {data &&
        data.movies.map((movie) => (
          <div key={movie._id} className="more-movies">
            <li>
              <img src={movie.backdrop_path} alt={movie.title} />
            </li>
          </div>
        ))}
    </div>
  );
};
