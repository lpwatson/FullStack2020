import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ courses }) => {
  return (
    <div>
      <Header name="Web development curriculum" />
      <ul>
        {courses.map(course =>
            <Content key={course.id} course={course} />
        )}
      </ul>
    </div>
)
}

export default Course