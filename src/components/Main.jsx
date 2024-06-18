import Filters from './Filters'
import CharacterList from './CharacterList'
import PropTypes from "prop-types";
import '../styles/Main.scss'


const Main = ({data, handleName, search, setSearch, speciesFilter, setSpeciesFilter, species, statusFilter, setStatusFilter, origin, setOriginFilter, locationFilter, setLocationFilter, location}) => {
  return (
    <main className='main'>
        <div className='main_filterBox'>
          <Filters
            handleName={handleName}
            search={search}
            setSearch={setSearch}
            speciesFilter={speciesFilter}
            setSpeciesFilter={setSpeciesFilter}
            species={species}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            origin={origin}
            setOriginFilter={setOriginFilter}
            data={data}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            location={location}
            />
        </div>
        <CharacterList data={data}/>
    </main>
  )
}

Main.propTypes = {
  data: PropTypes.array,
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
  locationFilter: PropTypes.func,
  setLocationFilter: PropTypes.func,
  location: PropTypes.array
}

export default Main