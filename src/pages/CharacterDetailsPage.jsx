import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCharacterById } from '../api/characters-api';

export function loader({ params }) {
  const { id } = params;  
  return getCharacterById(id);  
}

const CharacterDetailsPage = () => {
  const character = useLoaderData(); 
  if (!character) {
    return <p>Character not found!</p>;  
  }

  const { name, description, thumbnail,modified } = character;
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;  

  return (
    <div>
      <h2>{name}</h2>
      {imageUrl ? <img src={imageUrl} alt={name} /> : <p>No image available.</p>}  {/* Afficher l'image si elle est disponible */}
      {description ? <p> {description}</p> : <p>No description available.</p>}
      {modified ? <p>{modified}</p> : <p>No modification date available.</p>}
    </div>
  );
};

export default CharacterDetailsPage;
