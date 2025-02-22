// Importer React et le hook useState
import React, { useState } from 'react'; 
// Importer le composant MovieList
import MovieList from './components/MovieList'; 
// Importer le composant Filter
import Filter from './components/Filter'; 
// Importer le composant AddMovie
import AddMovie from './components/AddMovie'; 
// Importer le fichier CSS pour le style
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

const App = () => {
  // État pour stocker la liste des films
  const [movies, setMovies] = useState([
    // Films initiaux
    {
      title: 'Inception',
      description: 'Un voleur qui vole des secrets d\'entreprise grâce à l\'utilisation de la technologie de partage de reve',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
      rating: 8.8,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'Interstellar',
      description: 'Une équipe d\'explorateurs voyage à travers un trou de ver dans l\'espace pour assurer la survie de l\'humanité.',
      posterURL: 'https://media.senscritique.com/media/000008299751/0/interstellar.jpg',
      rating: 8.6,
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
      title: 'The Dark Knight',
      description: 'Lorsque la menace connue sous le nom de Joker émerge, Batman doit accepter l\'un des plus grands tests psychologiques et physiques de sa capacité à combattre l\'injustice.',
      posterURL: 'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
      rating: 9.0,
      trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    },
    {
      title: 'The Matrix',
      description: 'Un hacker apprend de mystérieux rebelles la véritable nature de sa réalité et son rôle dans la guerre contre ses contrôleurs.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg',
      rating: 8.7,
      trailerURL: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      title: 'Fight Club',
      description: 'Un employé de bureau insomniaque et un fabricant de savon insouciant forment un club de combat souterrain qui évolue en bien plus.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg',
      rating: 8.8,
      trailerURL: 'https://www.youtube.com/embed/qtRKdVHc-cE',
    },
    {
      title: 'Pulp Fiction',
      description: 'Les vies de deux tueurs à gages, d\'un boxeur, de la femme d\'un gangster et d\'un couple de bandits de restaurant s\'entrelacent dans quatre récits de violence et de rédemption.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg',
      rating: 8.9,
      trailerURL: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
    },
    // ...autres films initiaux
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Fonction pour ajouter un nouveau film
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  // Fonction pour filtrer les films en fonction du titre et de la note
  const filterMovies = ({ title, rating }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="App">
        <h1 className="app-title">Movie App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <Filter onFilter={filterMovies} />
              <MovieList movies={filteredMovies} />
              <div className="add-movie-section">
                <h2 className="add-movie-title">Ajouter un nouveau film</h2>
                <AddMovie onAdd={addMovie} />
              </div>
            </>
          } />
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
