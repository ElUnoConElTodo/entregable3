import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({ setPage, RESIDENTS_PERPAGE, location}) => {
  return (
    <div>
      <ul className='pagination'>
    {
      numbersPage(location, RESIDENTS_PERPAGE)?.map(numberPage => <li onClick= {() => setPage
        (numberPage)} key={numberPage}> <button className={`pagination-btn ${numberPage}`}> {numberPage} </button> </li> )
    }
      </ul>
  </div>
  )
}

export default Pagination