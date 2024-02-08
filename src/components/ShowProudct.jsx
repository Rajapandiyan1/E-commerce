import React, { useEffect } from 'react'
import Filter from './Filter'
import SearchProduct from './SearchProduct'

export default function ShowProudct({prod ,load}) {
 
  return (
    <div className="row pt-3 ms-0 me-0 marg-p" >
    <SearchProduct prud={prod} load={load}/>
    </div>
  )
}
