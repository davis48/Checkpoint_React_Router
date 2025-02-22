import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

// Composant fonctionnel MovieList qui prend une liste de films en prop
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {/* Parcourt la liste des films et affiche chaque film */}
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          {/* Lien vers la page de détails du film */}
          <Link to={`/movie/${movie.title}`}>
            {/* Affiche l'affiche du film */}
            <img src={movie.posterURL} alt={movie.title} />
            {/* Affiche le titre du film */}
            <h3>{movie.title}</h3>
          </Link>
          {/* Affiche une brève description du film */}
          <p className="movie-description">{movie.description.split(' ').slice(0, 20).join(' ')}...</p>
          {/* Affiche la note du film */}
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
