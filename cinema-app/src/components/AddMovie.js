import React, { useState } from 'react';

// Composant AddMovie qui prend une fonction onAdd en prop
const AddMovie = ({ onAdd }) => {
  // Déclaration des états pour les champs du formulaire
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  // Fonction pour gérer l'ajout d'un film
  const handleAdd = () => {
    // Appel de la fonction onAdd avec les valeurs des champs
    onAdd({ title, description, posterURL, rating: parseFloat(rating) });
    // Réinitialisation des champs du formulaire
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div className="add-movie">
      {/* Champ pour le titre du film */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Champ pour la description du film */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* Champ pour l'URL de l'affiche du film */}
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      {/* Champ pour la note du film */}
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      {/* Bouton pour ajouter le film */}
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
