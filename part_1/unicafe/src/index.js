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

const Display = (props) => (
  <div>
    {props.text} {props.value}
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={good + neutral + bad} />
      <Display text="average" value={(good - bad) / (good + bad + neutral)} />
      <Display text="positive" value={(good /(good + neutral + bad) * 100)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))