import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import '../styles/CharacterCard.scss'
import { useState, useEffect } from "react";

const CharacterCard = ({data}) => {

  const [statusClass, setStatusClass] = useState('');

  useEffect(() => {
    let className;
    if (data.status === 'Alive') {
      className = 'status-alive';
    } else if (data.status === 'Dead') {
      className = 'status-dead';
    } else {
      className = 'status-unknown';
    }
    setStatusClass(className);
  }, [data.status]);

  return (
    <article className="card">
        <img src={data.img} alt="Character image"  className="card_img"/>
        <div className="card_deets">
          <h2 className="card_deets-name">{data.name} <i className={`fa-regular fa-circle-dot ${statusClass}`}></i></h2>
          <h3 className="card_deets-spec">{data.species}</h3>
          <Link to={`/character/${data.id}`} className="card_deets-link">Click here, you nosy parasite.</Link>
        </div>
    </article>
  )
}

CharacterCard.propTypes = {
  data: PropTypes.object,
}

export default CharacterCard