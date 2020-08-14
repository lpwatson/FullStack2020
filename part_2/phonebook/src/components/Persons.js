import React from 'react'

const Persons = ({searchResults, deletePerson}) => {
  return (
    <ul>
        {searchResults.map(person =>
          <li key={person.name}>
            {person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button>
          </li>
        )}
      </ul>
  )
}

export default Persons