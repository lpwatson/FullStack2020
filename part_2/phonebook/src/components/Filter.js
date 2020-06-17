import React from 'react'

const Filter = ({newSearchName, handleSearchChange}) => {
  return (
    <div>
      <p>
        filter shown with <input
          type="search"
          value={newSearchName}
          onChange={handleSearchChange}
        />
      </p>
    </div>
  )
}

export default Filter