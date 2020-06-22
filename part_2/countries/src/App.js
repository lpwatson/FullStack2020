import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries] = useState([])
  const [ searchTerm, setSearchTerm] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  })

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
      setSearchResults(results)
  }, [countries, searchTerm])

  return (
    <div>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <Countries searchResults={searchResults} />
    </div>
  )
}

export default App;
