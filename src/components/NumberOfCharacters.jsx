function NumberOfCharacters({ characters = [] }) {
  // Ensure characters is always an array before accessing length
  const count = Array.isArray(characters) ? characters.length : 0;

  return (
    <p>
      {count > 0 
        ? `There is ${count} character${count > 1 ? 's' : ''}` 
        : 'There is no character'}
    </p>
  );
}

export default NumberOfCharacters;
