import React from 'react'

const Persons = ({searchResults}) => {
  return (
    <ul>
        {searchResults.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
  )
}

export default Persons