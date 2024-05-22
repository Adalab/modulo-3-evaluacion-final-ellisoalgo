import { Link } from "react-router-dom"

const CharacterCard = ({data}) => {
  return (
    <article>
        <img src={data.img} alt="Character image" />
        <h2>{data.name}</h2>
        <h3>{data.species}</h3>
        <Link to={`/character/${data.id}`}>Sheesh, if you want more info, click here, you nosy parasite.</Link>
    </article>
  )
}

export default CharacterCard