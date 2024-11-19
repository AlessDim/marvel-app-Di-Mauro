import React from 'react';
import CharactersList from './../components/CharactersList.jsx';
import NumberOfCharacters from './../components/NumberOfCharacters.jsx';
import characters from './../data/characters.json';

function CharactersPage() {
  return (
    <div>
      <CharactersList characters={characters} />
      <NumberOfCharacters characters={characters} />
    </div>
  );
}

export default CharactersPage;
