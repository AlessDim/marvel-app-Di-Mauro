import React from 'react';
import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";
import { getCharacters } from '../api/characters-api';
import { useLoaderData } from 'react-router-dom';

// import characters from '../data/characters.json';

export function loader() {
    return getCharacters();
}

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    const characters = useLoaderData();

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;