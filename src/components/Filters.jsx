import FilterByName from './FilterByName'
import FilterBySpecies from './FilterBySpecies'
import FilterByStatus from './FilterByStatus'
import FilterByPlanet from './FilterByPlanet'
import FilterByLocation from './FilterByLocation'
import PropTypes from "prop-types";
import '../styles/Filters.scss'


const Filters = ({handleName, search, setSearch, speciesFilter, setSpeciesFilter, species, statusFilter, setStatusFilter, origin, setOriginFilter, data, locationFilter, setLocationFilter, location}) => {

  const handleReset = (ev) => {
    ev.preventDefault("");
    setOriginFilter("")
    setSpeciesFilter("")
    setStatusFilter("")
    setSearch("")
    setLocationFilter("")
  }
  return (
    <section className='filters'>
        <form action="" className='filters_form'>
          <FilterByName handleName={handleName} search={search}/>
          <FilterBySpecies setSpeciesFilter={setSpeciesFilter} species={species} speciesFilter={speciesFilter}/>
          <FilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
          <FilterByPlanet origin={origin} setOriginFilter={setOriginFilter}/>
          <FilterByLocation locationFilter={locationFilter} location={location} setLocationFilter={setLocationFilter}/>
        </form>
        <div className='filters_resultcounter'>
          <p className='filters_resultcounter-count'>Your search includes {data.length} results</p>
        </div>
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
  data: PropTypes.array,
  locationFilter: PropTypes.func,
  setLocationFilter: PropTypes.func,
  location: PropTypes.array
}

export default Filters