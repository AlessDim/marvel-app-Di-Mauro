import { Link } from 'react-router-dom';

function CharactersList({ characters }) {
  return (
    <>
      {characters.length > 0 ? (
        <ul id="characters">
          {characters.map((character) => (
            <li key={character.id}>
              <Link to={`/character/${character.id}`}>{character.name}</Link>  {}
            </li>
          ))}
        </ul>
      ) : (
        <p>No characters available.</p>
      )}
    </>
  );
}

export default CharactersList;
