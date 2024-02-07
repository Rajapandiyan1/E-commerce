import React from 'react'

export default function SearchProduct({prud}) {
  return (
    <div className='col-8 col-lg-10'>
      {
      prud.map((data,id)=>{return <div className="row border" key={id}>
      <div className="col-4">
        <img src={data.url} className='w-100' height={'200px'} alt="" />
      </div>
      
      <div className="col-8">
                  <div className='mt-4'><span>Product Rate : </span>{data.rate}</div><div className='mt-4'><span>Offer percentage : </span>{data.offer} % </div><div className='mt-4'><span>Discount Rate : </span>{data.discountRate}</div>
                </div>
                <div className="row mb-3 justify-content-end">
                  <div className="col-2">
                <button className="btn btn-primary ">Buy</button>
                  </div>
                  <div className="col-2">
                <button className="btn btn-warning">Add Card</button>
                  </div>
                </div>
    </div>})}
    </div>
  )
}
