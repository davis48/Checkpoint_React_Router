import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = ({ movies }) => {
  // Récupère le titre du film à partir des paramètres de l'URL
  const { title } = useParams();
  // Trouve le film correspondant au titre
  const movie = movies.find((movie) => movie.title === title);

  return (
    <div className="movie-detail">
      {/* Affiche le titre du film */}
      <h2>{movie.title}</h2>
      {/* Affiche la description complète du film */}
      <p>{movie.description}</p>
      {/* Affiche la bande-annonce du film */}
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      {/* Lien pour retourner à la page d'accueil */}
      <Link to="/" className="back-button">Retour à la page d'accueil</Link>
    </div>
  );
};

export default MovieDetail;
