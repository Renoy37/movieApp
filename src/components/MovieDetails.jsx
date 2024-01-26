import React from "react";

export default function MovieDetails({ movie }) {
  return (
    <div>
      <h1 className="movie-title">Movie Detail</h1>
      {movie && (
        <div className="movie-details-container">
          <img src={movie.img} />
          <p>{movie.text}</p>
          <button className="movie-details-btn">
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              Download Now
            </a>
          </button>
        </div>
      )}
    </div>
  );
}
