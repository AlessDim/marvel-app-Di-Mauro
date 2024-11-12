import React from 'react';
import characters from './data/characters.json';
import './App.css';
import CharactersList from './components/CharactersList.jsx';

function App() {
  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  );
}

export default App;
