import React from 'react';

function NumberOfCharacters({ characters }) {
  const count = characters.length;

  return (
    <p>
      {count > 0 
        ? `There is ${count} character${count > 1 ? 's' : ''}` 
        : 'There is no character'}
    </p>
  );
}

export default NumberOfCharacters;
