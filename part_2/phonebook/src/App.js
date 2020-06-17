import React, { useState, useEffect } from 'react';
import './App.css';
import Persons from'./components/Persons';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchName, setNewSearchName ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

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
