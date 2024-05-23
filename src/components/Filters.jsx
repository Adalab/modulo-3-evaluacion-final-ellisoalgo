import FilterByName from './FilterByName'
import FilterBySpecies from './FilterBySpecies'
import FilterByStatus from './FilterByStatus'
import FilterByPlanet from './FilterByPlanet'
import PropTypes from "prop-types";
import '../styles/Filters.scss'


const Filters = ({handleName, search, setSearch, speciesFilter, setSpeciesFilter, species, statusFilter, setStatusFilter, origin, setOriginFilter}) => {

  const handleReset = (ev) => {
    ev.preventDefault("");
    setOriginFilter("")
    setSpeciesFilter("")
    setStatusFilter("")
    setSearch("")
  }
  return (
    <section className='filters'>
        <form action="" className='filters_form'>
          <FilterByName handleName={handleName} search={search}/>
          <FilterBySpecies setSpeciesFilter={setSpeciesFilter} species={species} speciesFilter={speciesFilter}/>
          <FilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
          <FilterByPlanet origin={origin} setOriginFilter={setOriginFilter}/>
        </form>
        <button onClick={handleReset} className='filters_reset'>Reset Filters</button>
    </section>
  )
}

Filters.propTypes ={
  handleName: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  speciesFilter: PropTypes.string,
  setSpeciesFilter: PropTypes.func,
  species: PropTypes.array,
  statusFilter: PropTypes.string,
  setStatusFilter: PropTypes.func,
  origin: PropTypes.array,
  setOriginFilter: PropTypes.func,
}

export default Filters