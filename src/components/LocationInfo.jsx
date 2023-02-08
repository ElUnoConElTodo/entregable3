import React from 'react'
import "./styles/LocationInfo.css"

const Locationinfo = ({location}) => {
  return (
  <article className='locationInfo'>
        <h2 className='locationInfo-title'>Location: {location?.name}</h2>
    <section className='list'>
            <ul>
               <li className='locationInfo-list'><span className='locationInfo-miniTitple'>Type:</span>{location?.type}</li>
               <li className='locationInfo-list'><span className='locationInfo-miniTitple'>Dimension: </span>{location?.dimension}</li>
               <li className='locationInfo-list'><span className='locationInfo-miniTitple'>Population: </span>{location?.residents.length}</li>
            </ul>
    </section>
  </article>
    
  )
}

export default Locationinfo