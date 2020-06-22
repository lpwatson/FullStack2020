import React from 'react'

const Countries = ({searchResults}) => {
  if (searchResults.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }else if (searchResults.length < 10 && searchResults.length > 1) {
    return (
      <ul>
        {searchResults.map(country =>
          <li key={country.name}>{country.name}</li>)}
      </ul>
    )
  }else if (searchResults.length === 1){
    return (
      <div>
        <h1>{searchResults[0].name}</h1>
        <p>{searchResults[0].capital}</p>
        <p>{searchResults[0].population}</p>
        <h2>languages</h2>
        <ul>
          {searchResults[0].languages.map(language =>
             <li key={language.name}>{language.name}</li>
          )}
        </ul>
        <img alt='flag' src={searchResults[0].flag}/>
      </div>
    )
  }else {
    return (
      <div></div>
    )
  }
}

export default Countries