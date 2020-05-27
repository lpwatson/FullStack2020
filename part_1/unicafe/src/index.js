import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad <= 0) {
    return (
      <div>No feedback given</div>
    )
  }
  else {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good - bad) / (good + bad + neutral)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(good /(good + neutral + bad) * 100)}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))