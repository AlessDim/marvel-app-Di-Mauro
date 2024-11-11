function getCharacters() {
    fetch('data/characters.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de reseau');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Il y a eu un problème avec l\'opération fetch :', error);
        });
}

getCharacters();