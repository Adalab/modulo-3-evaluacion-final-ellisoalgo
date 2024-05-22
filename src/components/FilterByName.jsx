const FilterByName = ({handleName, search}) => {

  return (
    <>
        <label htmlFor="">Search by name</label>
        <input type="text" name="name" id="name" value={search} onChange={handleName}/>
    </>
  ) 
}

export default FilterByName