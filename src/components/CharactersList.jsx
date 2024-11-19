import React from 'react';

function CharactersList({ characters }) {
  return (
    <>
      {characters.length > 0 ? (
        <ul id="characters">
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      ) : (
        <p>No characters available.</p>
      )}
    </>
  );
}

export default CharactersList;
