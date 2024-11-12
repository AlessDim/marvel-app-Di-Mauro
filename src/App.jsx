import React from 'react';
import characters from './data/characters.json';
import './App.css';
import CharactersList from './components/CharactersList.jsx';
import NumberOfCharacters from './components/NumberOfCharacters.jsx';

function App() {
  return (
    <div>
      <CharactersList characters={characters} />
      <NumberOfCharacters characters={characters} />

    </div>
  );
}

export default App;
