import CharacterCard from './CharacterCard'

const CharacterList = ({data}) => {

  return (
    <>
      {data.map((character)=> <CharacterCard key={character.id} data={character}/>)}
    </>
  )
}

export default CharacterList