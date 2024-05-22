import Filters from './Filters'
import CharacterList from './CharacterList'


const Main = ({data, handleName, search, setSearch, setSpeciesFilter, species, statusFilter, setStatusFilter, origin, setOriginFilter}) => {
  return (
    <main>
        <Filters 
          handleName={handleName} 
          search={search} 
          setSearch={setSearch}
          setSpeciesFilter={setSpeciesFilter} 
          species={species}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          origin={origin}
          setOriginFilter={setOriginFilter}
          />
        <CharacterList data={data}/>
    </main>
  )
}

export default Main