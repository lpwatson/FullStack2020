import React, { useState, useEffect } from 'react';
import './App.css';
import Persons from'./components/Persons';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchName, setNewSearchName ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const [ notificationMessage, setNotificationMessage ] = useState(null)
  const [ messageType, setMessageType ] = useState("success")

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

    if (persons.find( person => { return person.name === personObject.name } ) ) {
      window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)

      const personToUpdate = persons.find( person => { return person.name === personObject.name } )
      personService
      .update(personToUpdate.id, personObject)
      .then(response => personService
        .getAll()
        .then(allPersons => {
          setPersons(allPersons)
        }),

        setNewName(''),
        setNewNumber(''),
        setNotificationMessage(`Changed number for ${personObject.name}`),
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      )
      .catch(error => {
        setMessageType("error")
        setNotificationMessage(`Information for ${personObject.name} has already been removed from server`)
      })
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    }
    else {
      personService
      .create(personObject)
      .then(response => personService
        .getAll()
        .then(allPersons => {
          setPersons(allPersons)
        }),

        setNewName(''),
        setNewNumber(''),
        setNotificationMessage(`Added ${personObject.name}`),
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      )
    }
  }

  const deletePerson = (person) => {
    window.confirm(`Delete ${person.name} ?`)
    personService
    .deleteRecord(person.id)
    .then(response => {
      setPersons(persons.filter(p => p.id !== person.id))
    })
    .catch(error => {
      setMessageType("error")
      setNotificationMessage(`Information for ${person.name} has already been removed from server`)
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    })
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
      <Notification messageType={messageType} message={notificationMessage} />
      <Filter
        newSearchName={newSearchName}
        handleSearchChange={handleSearchChange}
      />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}  />
      <h2>Numbers</h2>
      <Persons searchResults={searchResults} deletePerson={deletePerson} />
    </div>
  )
}
export default App;
