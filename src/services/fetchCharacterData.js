const fetchCharacterData = async () => {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  let allCharacters = [];
  let currentPage = 1;
  let totalPages = 1;

  while (currentPage <= totalPages) {
    const url = `${baseUrl}?page=${currentPage}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch page ${currentPage}: ${response.status}`);
      }

      const data = await response.json();
      totalPages = data.info.pages;

      const characterArray = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          location: character.location.name,
          img: character.image,
          episodes: character.episode.length,
        };
      });

      allCharacters = allCharacters.concat(characterArray);
      currentPage += 1;
    } catch (error) {
      console.error(`Error fetching data on page ${currentPage}:`, error);
      break;
    }
  }

  return allCharacters;
};

// Example usage
fetchCharacterData()
  .then((allCharacters) => console.log(allCharacters))
  .catch((error) => console.error('Error fetching character data:', error));

export default fetchCharacterData