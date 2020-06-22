import React from 'react'

const Filter = ({searchTerm, handleSearchChange}) => {
  return (
    <div>
      <p>
        find countries <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </p>
    </div>
  )
}

export default Filter