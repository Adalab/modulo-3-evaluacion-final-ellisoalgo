import { Link, useParams } from 'react-router-dom'
import rick from '../images/Rick_Sanchez.webp'

const CharacterDetail = ({characterData}) => {

  const {id} = useParams()
  const characterInfo = characterData.find(character => character.id === id);

  console.log("Params id", id);
  console.log("Charac info", characterInfo)

  return ( characterInfo ?
    <section>
        <Link to='/'>Go back</Link>
        <div>
            <img src={characterInfo.img} alt="Character image not found" />
            <div>
                <h3>{characterInfo.name}</h3>
                <ul>
                    <li>{characterInfo.species}</li>
                    <li>{characterInfo.planet}</li>
                    <li>{characterInfo.status}</li>
                    <li>{characterInfo.episodes}</li>
                </ul>
            </div>
        </div>
    </section>
    : <section>
      <Link to='/'>Go back</Link>
      <div>
        <img src={rick} alt="img not found" />
        <div>
          <p>Burp* Seriously? That character doesn't even exist in this universe. <Link to='/'>Go home, dummy.</Link></p>
        </div>
      </div>
    </section>
  )
}

export default CharacterDetail