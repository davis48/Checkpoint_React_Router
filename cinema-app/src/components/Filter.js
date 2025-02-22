import React, { useState } from 'react';

// Composant Filter qui prend une fonction onFilter en prop
const Filter = ({ onFilter }) => {
  // Variables d'état pour le titre et la note
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  // Fonction pour gérer l'action de filtrage
  const handleFilter = () => {
    // Appeler la fonction onFilter avec le titre et la note actuels
    onFilter({ title, rating });
  };

  return (
    <div className="filter">
      {/* Champ de saisie pour filtrer par titre */}
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Champ de saisie pour filtrer par note */}
      <input
        type="number"
        placeholder="Filtrer par note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      {/* Bouton pour déclencher l'action de filtrage */}
      <button onClick={handleFilter}>Filtrer</button>
    </div>
  );
};

export default Filter;
