import PropTypes from "prop-types";

const FilterBySpecies = ({species, setSpeciesFilter, speciesFilter}) => {

  const handleSpecies = (ev) =>{
    setSpeciesFilter(ev.target.value)
  }

  return (
    <>
        <select name="species" id="species" onChange={handleSpecies} value={speciesFilter} className="filters_form-input">
          <option value="">Pick a Species</option>
            {species.map((species, i)=>{
              return <option value={species} key={i}>{species}</option>
            })}
        </select>
    </>
  )
}

FilterBySpecies.propTypes = {
  speciesFilter: PropTypes.string,
  setSpeciesFilter: PropTypes.func,
  species: PropTypes.array,
}

export default FilterBySpecies