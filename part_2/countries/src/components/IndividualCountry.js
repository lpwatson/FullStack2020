import React, {useState, useEffect} from 'react'
import axios from 'axios'

const IndividualCountry = ({country}) => {

  const [ weather, setWeather] = useState({})
  const [ isLoaded, setIsLoaded ] = useState(false)
  const api_key = process.env.REACT_APP_API_KEY
  const url = `http://api.weatherstack.com/current?access_key=${api_key}`
  const city = country.capital


  useEffect(() => {
    axios.get(`${url}&query=${city}`)
      .then(response => {
        setWeather(response.data)
        setIsLoaded(true)
      })
  },[url, city])

  if (!isLoaded) {
    return (
      <div>
        <p>Weather data is loading ...</p>
      </div>
    )
  }else {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map(language =>
            <li key={language.name}>{language.name}</li>
          )}
        </ul>
        <img alt='flag' src={country.flag}/>
        <h2>Weather in {country.capital}</h2>
        <p>temperature: {weather.current.temperature} Celcius</p>
        <img alt='weather' src={weather.current.weather_icons} />
        <p>wind: {weather.current.windspeed} mph direction {weather.current.wind_dir}</p>
      </div>
    )
  }
}

export default IndividualCountry

