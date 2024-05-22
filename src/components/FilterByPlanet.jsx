const FilterByPlanet = ({origin, setOriginFilter}) => {

  const handlePlanet = (ev) => {
    setOriginFilter(ev.target.value)
  }
  return (
    <>
        <label htmlFor="">Search Origin</label>
        <select name="origin" id="origin" onChange={handlePlanet}>
            <option value="">Select</option>
            {origin.map((origin, i)=>{
              return <option value={origin} key={i}>{origin}</option>
            })}
        </select>
    </>
  )
}

export default FilterByPlanet