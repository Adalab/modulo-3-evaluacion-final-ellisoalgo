import PropTypes from "prop-types";

const FilterByLocation = ({location, setLocationFilter, locationFilter}) => {

  const handleLocation = (ev) => {
    setLocationFilter(ev.target.value)
  }
  return (
    <>
        <select name="location" id="location" onChange={handleLocation} className="filters_form-input">
            <option value="">Pick a Current Location</option>
            {location.map((location, i)=>{
              return <option value={location} key={i}>{location}</option>
            })}
        </select>
    </>
  )
}

FilterByLocation.propTypes = {
  location: PropTypes.array,
  setLocationFilter: PropTypes.func,
}

export default FilterByLocation