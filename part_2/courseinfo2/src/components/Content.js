import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({ course }) => {
  const parts = course.parts
  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )}
      </ul>
      <Total key={course.id} parts={course.parts} />
    </div>
  )
}

export default Content