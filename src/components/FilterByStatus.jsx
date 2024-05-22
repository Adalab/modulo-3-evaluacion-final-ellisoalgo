const FilterByStatus = ({statusFilter, setStatusFilter}) => {

  const handleStatus = (ev) =>{
    setStatusFilter(ev.target.value)
  }

  return (
    <>
        <label htmlFor="">Search Status</label>
        <select name="status" id="status" onChange={handleStatus} value={statusFilter}>
            <option value="">Select</option>
            <option value="Dead">Dead</option>
            <option value="Alive">Alive</option>
            <option value="unknown">Unknown</option>
        </select>
    </> 
  )
}

export default FilterByStatus