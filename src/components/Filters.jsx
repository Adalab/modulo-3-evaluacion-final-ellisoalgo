import FilterByName from './FilterByName'
import FilterBySpecies from './FilterBySpecies'
import FilterByStatus from './FilterByStatus'
import FilterByPlanet from './FilterByPlanet'

const Filters = ({handleName, search, setSearch, setSpeciesFilter, species, statusFilter, setStatusFilter, origin, setOriginFilter}) => {

  const handleReset = (ev) => {
    ev.preventDefault("");
    setOriginFilter([])
    setSpeciesFilter([])
    setStatusFilter("")
    setSearch("")
  }
  return (
    <section>
        <form action="">
          <FilterByName handleName={handleName} search={search}/>
          <FilterBySpecies setSpeciesFilter={setSpeciesFilter} species={species}/>
          <FilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
          <FilterByPlanet origin={origin} setOriginFilter={setOriginFilter}/>
        </form>
        <button onClick={handleReset}>Reset Filters</button>
    </section>
  )
}

export default Filters