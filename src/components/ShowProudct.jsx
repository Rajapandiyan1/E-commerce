import React, { useEffect } from 'react'
import Filter from './Filter'
import SearchProduct from './SearchProduct'

export default function ShowProudct({prod ,load}) {
 
  return (
    <div className="row mt-lg-4 ms-0 me-0" style={{marginTop:'15vh'}}>
    <SearchProduct prud={prod} load={load}/>
    </div>
  )
}
