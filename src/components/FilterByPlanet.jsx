import PropTypes from "prop-types";

const FilterByPlanet = ({origin, setOriginFilter}) => {

  const handlePlanet = (ev) => {
    setOriginFilter(ev.target.value)
  }
  return (
    <>
        <select name="origin" id="origin" onChange={handlePlanet} className="filters_form-input">
            <option value="">Pick a Planet</option>
            {origin.map((origin, i)=>{
              return <option value={origin} key={i}>{origin}</option>
            })}
        </select>
    </>
  )
}

FilterByPlanet.propTypes = {
  origin: PropTypes.array,
  setOriginFilter: PropTypes.func,
}

export default FilterByPlanet