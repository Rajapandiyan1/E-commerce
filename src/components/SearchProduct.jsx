import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function SearchProduct({prud,load}) {
  let [data,setdata]=useState([])
  useEffect(()=>{
   setdata(prud)
  },[prud])
  return (
    <div className='col-12 col-lg-12'>
      {load && <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'71vh'}}>
        <span className="spinner-border text-success"></span>
        </div>}
      { !load &&
      prud.map((data,id)=>{return <div className="row border" key={id} style={{minHeight:'80px'}}>
      <div className="col-5 d-flex align-items-center col-md-3  col-sm-4 col-lg-3">
        <img src={data.url}  className='ratioa w-100'  alt="" />
      </div>
      
      <div className="col-7 col-md-9 col-sm-8 col-lg-9">
      <div className='memo-text-1'><span className='memo-text-1'>Product  : </span>{data.product}</div>

                  <div className='mt-1 memo-text-1'><span className='memo-text-1'>Product Rate : </span>{data.rate}</div>
                  <div 
                  className='mt-1 memo-text-1'><span className='memo-text-1'>Offer percentage : </span>{Math.round(data.offer)} % </div><div className='mt-1 memo-text-1'><span className='memo-text-1'>Discount Rate : </span>{Math.round(data.discountRate)}</div>
                </div>
                <div className="row mb-2 mt-2 justify-content-end">
                  <div className="col-4">
                <button className="btn btn-primary  btn-sm w-100">Buy</button>
                  </div>
                  <div className="col-6">
                <button className="btn btn-warning btn-sm w-100">Add Card</button>
                  </div>
                </div>
    </div>})}
    </div>
  )
}
