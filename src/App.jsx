import React from 'react';
import characters from './data/characters.json';
import './App.css';

function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <ul id="characters">
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
