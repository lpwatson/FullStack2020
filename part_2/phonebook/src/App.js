import React, { useState, useEffect } from 'react';
import './App.css';
import Persons from'./components/Persons';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchName, setNewSearchName ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
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
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(personObject))
        setNewName('')
      })
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
