import { Link, useParams } from 'react-router-dom'
import rick from '../images/Rick_Sanchez.webp'
import PropTypes from "prop-types";
import '../styles/CharacterDetail.scss'

const CharacterDetail = ({characterData}) => {

  console.log(characterData)

  const {id} = useParams()
  console.log(1, useParams(id))
  console.log(2, characterData.id)
  const characterInfo = characterData.find(character => character.id.toString() === id);
  console.log('Found character:', characterInfo);

  return ( characterInfo ?
    <section className='detail'>
        <div className='detail_card'>
            <Link to='/' className='detail_back'>⬅ Go back</Link>
            <img src={characterInfo.img} alt="Character image not found" className='detail_card-img'/>
            <div className='detail_card-info'>
                <h3 className='detail_card-info-name'>{characterInfo.name}</h3>
                <div className='detail_card-info-list'>
                    <p><strong>Species:</strong> {characterInfo.species}</p>
                    <p><strong>Planet of origin:</strong> {characterInfo.origin}</p>
                    <p><strong>Current status:</strong> {characterInfo.status}</p>
                    <p><strong>Appears in:</strong> {characterInfo.episodes} episodes</p>
                </div>
            </div>
        </div>
    </section>
    : <section className='detail_error'>
      <div className='detail_error-card'>
        <img src={rick} alt="img not found" className='detail_error-card-img' />
        <div className='detail_error-card-text'>
          <p>Burp* Seriously? That character doesn&apos;t even exist in this universe.</p>
          <Link to='/' className='detail_error-card-text-link'>Go home, dummy.</Link>
          
        </div>
      </div>
    </section>
  )
}

CharacterDetail.propTypes = {
  characterData: PropTypes.array,
}

export default CharacterDetail