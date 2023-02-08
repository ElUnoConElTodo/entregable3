import React from 'react'
import "./styles/DimensionFinder.css"

const DimensionFinder = ({handleSubmit}) => {
  return (
    <form className='searcher' onSubmit={handleSubmit}>
        <input type="text" id='idLocation' placeholder='Type a location Id'/>
        <button className='btn-search'>Search</button>
    </form>
  )
}

export default DimensionFinder