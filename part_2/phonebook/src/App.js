import React, { useState, useEffect } from 'react';
import './App.css';

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
      person.name.toLowerCase().includes(newSearchName));
      setSearchResults(results)
  }, [persons,newSearchName]);

  console.log(searchResults.type)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>
          filter shown with <input
            type="search"
            value={newSearchName}
            onChange={handleSearchChange}
          />
        </p>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input
              value={newName}
              onChange={handleNameChange}
            />
        </div>
        <div>
          number: <input
              value={newNumber}
              onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {searchResults.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>

  )

}
export default App;
