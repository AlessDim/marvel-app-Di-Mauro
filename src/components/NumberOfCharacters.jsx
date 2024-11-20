function NumberOfCharacters({ characters = [] }) {
  const count = characters.length;

  return (
    <p>
      {count > 0 
        ? `There ${count > 1 ? 'are' : 'is'} ${count} character${count > 1 ? 's' : ''}` 
        : 'There is no character'}
    </p>
  );
}

export default NumberOfCharacters;