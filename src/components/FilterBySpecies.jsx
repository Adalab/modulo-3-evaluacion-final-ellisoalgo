const FilterBySpecies = ({species, setSpeciesFilter}) => {

  const handleSpecies = (ev) =>{
    setSpeciesFilter(ev.target.value)
  }

  return (
    <>
        <label htmlFor="">Search Species</label>
        <select name="species" id="species" onChange={handleSpecies}>
          <option value="">Select</option>
            {species.map((species, i)=>{
              return <option value={species} key={i}>{species}</option>
            })}
        </select>
    </>
  )
}

export default FilterBySpecies