// src/script.js

function getCharacters() {
    fetch('data/characters.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const charactersList = document.getElementById('characters');
            
            // Vide la liste avant de la remplir
            charactersList.innerHTML = '';

            // Ajoute un élément li pour chaque personnage
            data.forEach(character => {
                const li = document.createElement('li');
                li.textContent = character.name; // Ou un autre attribut de personnage
                charactersList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Il y a eu un problème avec l\'opération fetch :', error);
        });
}

getCharacters();
