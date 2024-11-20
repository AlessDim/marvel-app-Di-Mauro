import characters from './../data/characters.json';

export const getCharacters = () => {
  return characters;
};

export const getCharacterById = (id) => {
  const character = characters.find(character => character.id === id);
  return character || null;
};
