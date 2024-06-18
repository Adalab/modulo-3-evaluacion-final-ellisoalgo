import { Route, Routes } from "react-router-dom";
import Header from './Header'
import Main from './Main'
import CharacterDetail from './CharacterDetail'
import Footer from './Footer'
import { useEffect, useState } from "react";
import fetchCharacterData from "../services/fetchCharacterData";
import '../styles/App.scss'
import '../styles/var.scss'

const App = () => {

  const [characterData, setCharacterData] = useState([]);
  const [search, setSearch] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [originFilter, setOriginFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");


  const handleName = (ev)=> { setSearch(ev.target.value) }

  useEffect(()=>{
    fetchCharacterData().then((characterArray)=>{setCharacterData(characterArray)})
  }, []);

  const getSpecies = () =>{
    const species = characterData.map((character)=> character.species)
    const allSpeciesList = new Set(species)
    const speciesList = [...allSpeciesList]
    return speciesList
  }

  const getOrigin = () =>{
    const origin = characterData.map((character)=> character.origin)
    const allOriginsList = new Set(origin)
    const originList = [...allOriginsList]
    return originList
  }

  const getLocation = () =>{
    const location = characterData.map((character)=> character.location)
    const allLocationsList = new Set(location)
    const locationList = [...allLocationsList]
    return locationList
  }

  const filterData = characterData.filter((character)=>{
    if (speciesFilter.length === 0){
      return true;
    } else {
      return speciesFilter.includes(character.species)
    }
  })
  .filter((character)=> statusFilter ? statusFilter === character.status : true)
  .filter((character)=> (character.name.toLowerCase().includes(search.toLowerCase())))
  .filter((character)=>{
    if (originFilter.length === 0){
      return true;
    } else {
      return originFilter.includes(character.origin)
    }
  } )
  .filter((character)=>{
    if (locationFilter.length === 0){
      return true;
    } else {
      return locationFilter.includes(character.origin)
    }
  })

  return (
    <body className="body">
      <Header/>
      <Routes>
        <Route path='/' element={
          <Main 
            data={filterData} 
            handleName={handleName} 
            search={search} 
            setSearch={setSearch}
            speciesFilter={speciesFilter}
            setSpeciesFilter={setSpeciesFilter} 
            species={getSpecies()} 
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            origin={getOrigin()}
            setOriginFilter={setOriginFilter}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            location={getLocation()}
            />
        }/>

        <Route path='/character/:id' element={<CharacterDetail characterData={characterData} />}/>
      </Routes>
      <Footer/>
    </body>
  );
};

export default App;