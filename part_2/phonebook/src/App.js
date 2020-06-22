import React, { useState, useEffect } from 'react';
import './App.css';
import Persons from'./components/Persons';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchName, setNewSearchName ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.find( person => { return JSON.stringify(person) === JSON.stringify(personObject)} ) ) {
      window.alert(`${personObject.name} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearchName(event.target.value)
  }

  useEffect(() => {
    const results = persons.filter(person =>
      person.name.toLowerCase().includes(newSearchName.toLowerCase()));
      setSearchResults(results)
  }, [persons,newSearchName]);

  console.log(searchResults.type)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newSearchName={newSearchName}
        handleSearchChange={handleSearchChange}
      />
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}  />
      <h2>Numbers</h2>
      <Persons searchResults={searchResults} />
    </div>
  )
}
export default App;
