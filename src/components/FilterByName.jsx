import PropTypes from "prop-types";

const FilterByName = ({handleName, search}) => {

  return (
    <>
        <input type="text" name="name" id="name" value={search} onChange={handleName} className="filters_form-input" placeholder="Type a name"/>
    </>
  ) 
}

FilterByName.propTypes = {
  handleName: PropTypes.func,
  search: PropTypes.string,
}

export default FilterByName