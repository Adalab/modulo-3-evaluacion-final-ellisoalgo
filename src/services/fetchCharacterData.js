const fetchCharacterData = () => {
  return fetch ("https://rickandmortyapi.com/api/character")
  .then ((response)=> response.json())
  .then ((data)=>{
    const characterArray = data.results.map((character)=>{
        return{
            id: character.id,
            name: character.name,
            species: character.species,
            status: character.status,
            origin: character.origin.name,
            img: character.image,
            episodes: character.episode.length,
        }
    });
    return characterArray;
  })
}

export default fetchCharacterData