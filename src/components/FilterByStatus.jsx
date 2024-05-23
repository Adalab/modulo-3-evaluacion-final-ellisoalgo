import PropTypes from "prop-types";

const FilterByStatus = ({statusFilter, setStatusFilter}) => {

  const handleStatus = (ev) =>{
    setStatusFilter(ev.target.value)
  }

  return (
    <>
        <select name="status" id="status" onChange={handleStatus} value={statusFilter} className="filters_form-input">
            <option value="">Dead or Alive?</option>
            <option value="Dead">Dead</option>
            <option value="Alive">Alive</option>
            <option value="unknown">Unknown</option>
        </select>
    </> 
  )
}

FilterByStatus.propTypes = {
  statusFilter: PropTypes.string,
  setStatusFilter: PropTypes.func,
}

export default FilterByStatus