import React from 'react'

export default function SearchProduct({prud}) {
  return (
    <div className='col-12 col-lg-10'>
      {
      prud.map((data,id)=>{return <div className="row border" key={id} style={{height:'250px'}}>
      <div className="col-4">
        <img src={data.url} className='w-100' height={'140px'} alt="" />
      </div>
      
      <div className="col-8">
      <div className='mt-1'><span>Product  : </span>{data.product}</div>

                  <div className='mt-1'><span>Product Rate : </span>{data.rate}</div>
                  <div 
                  className='mt-1'><span>Offer percentage : </span>{data.offer} % </div><div className='mt-1'><span>Discount Rate : </span>{data.discountRate}</div>
                </div>
                <div className="row mb-3 justify-content-end">
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
