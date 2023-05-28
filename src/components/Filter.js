import React, { useState, useEffect } from 'react';
import "../styles/Filter.css"
import axios from 'axios';
import Photos from './Photos';

function Filter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [originalCharacters, setOriginalCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [showPhotos, setShowPhotos] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchTerm) {
      setCharacters(originalCharacters);
    } else {
      const filteredCharacters = originalCharacters.filter(
        character => character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCharacters(filteredCharacters);
    }
  };

  const handleMouseEnter = (character) => {
    setHoveredCharacter(character);
  };

  const handleMouseLeave = () => {
    setHoveredCharacter(null);
  };

  const handleCharacterClick = (characterName) => {
    const searchQuery = encodeURIComponent(characterName);
    const googleImagesUrl = `https://www.google.com/search?q=${searchQuery}&tbm=isch`;
    window.open(googleImagesUrl, '_blank');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setOriginalCharacters(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleNextApiClick = () => {
    setShowPhotos(true);
  };

  return (
    <div className='filter-block'>
      {showPhotos ? (
        <Photos />
      ) : (
        <>
          <div className='divbtnapi'>
            <button className='btnApi' onClick={handleNextApiClick}>Next API</button>
          </div>
          
          <h1 className='tittleAPI'>Consuming Rick and Morty API</h1>
          <div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar personaje por nombre..."
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <button className='buscar' type="submit">Buscar</button>
            </form>
          </div>

          <div className="character-grid">
            {characters.map(character => (
              <div
                key={character.id}
                className={`character-card ${hoveredCharacter && character.id === hoveredCharacter.id ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(character)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCharacterClick(character.name)}
              >
                <img className='charactersPhoto' src={character.image} alt={character.name} />
                <div className="character-info">
                  <h2>{character.name}</h2>
                  <p>Status: {character.status}</p>
                  <p>Species: {character.species}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Filter;
