import React from 'react';

// Composant fonctionnel MovieCard qui prend un objet movie en prop
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* Affiche l'image du film */}
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        {/* Affiche le titre du film */}
        <h3 className="movie-title">{movie.title}</h3>
        {/* Affiche la description du film */}
        <p className="movie-description">{movie.description}</p>
        {/* Affiche la note du film */}
        <span className="movie-rating">Note: {movie.rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
