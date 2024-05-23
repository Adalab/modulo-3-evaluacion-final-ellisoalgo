import CharacterCard from './CharacterCard'
import Morty from '../images/morty_oops.jpeg'
import PropTypes from "prop-types";
import '../styles/CharacterList.scss'

const CharacterList = ({data}) => {


  return ( data.length !== 0 ? 
    <section className='grid'>
      {data.map((character)=> <CharacterCard key={character.id} data={character} />)}
    </section> 
    : 
    <section className='noResult'>
    <p>Aw, geez! I can&apos;t find that character anywhere. Are you sure they exist?</p>
    <img src={Morty} alt="" />
    </section>

  )
}

CharacterList.propTypes = {
  data: PropTypes.array,
}

export default CharacterList