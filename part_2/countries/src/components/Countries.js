import React from 'react'
import IndividualCountry from './IndividualCountry'

const Countries = ({searchResults, setSearchResults}) => {

  const handleClick = (country) => {
    setSearchResults([country])
    return (
      searchResults
    )
  }

  if (searchResults.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }else if (searchResults.length < 10 && searchResults.length > 1) {
    return (
      <ul>
        {searchResults.map(country =>
          <li key={country.name}>
            {country.name} <button onClick={() => handleClick(country)}>show</button></li>)}
      </ul>
    )
  }else if (searchResults.length === 1){
    return(
      <div>
        <IndividualCountry country={searchResults[0]} />
      </div>
    )
  }else {
    return (
      <div></div>
    )
  }
}

export default Countries