import React from 'react';

function CharactersList({ characters }) {
  return (
    <>
      <h2>Marvel Characters</h2>
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
