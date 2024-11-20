import characters from './../data/characters.json';

export const getCharacters = () => {
  return characters;
};

export const getCharacterById = (id) => {
  const character = characters.find(character => character.id === id);
  if (!character) {
    throw new Error(`Character with id ${id} not found`);
  }
  return character;
};
