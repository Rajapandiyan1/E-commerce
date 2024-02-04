import React from 'react'
import Filter from './Filter'
import SearchProduct from './SearchProduct'

export default function ShowProudct() {
  return (
    <div className="row mt-4 mt-lg-4 ms-0 me-0">
        <Filter/>
    <SearchProduct/>
    </div>
  )
}
