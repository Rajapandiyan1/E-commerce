import React, { useEffect } from 'react'
import Filter from './Filter'
import SearchProduct from './SearchProduct'

export default function ShowProudct({prod ,load}) {
 
  return (
    <div className="row mt-4 mt-lg-4 ms-0 me-0">
        <Filter/>
    <SearchProduct prud={prod} load={load}/>
    </div>
  )
}
