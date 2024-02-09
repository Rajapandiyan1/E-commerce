import React, { useEffect, useState } from 'react'

function Orders() {
  let [orders,setOrders]=useState([])
  useEffect(()=>{
    fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/Orders',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((data)=>{return data.json()}).then((data)=>{setOrders([...data])})
        
  },[])
  return (
    <div className='row'>
    {orders.map((data,id)=>{
     return <div className="col-12 mt-2 mb-2 border pt-2 pb-2" key={id}>
        <div className="row">
          <div className="col-4">
            <img className='w-100 ratioa' src={data.Product.url} alt="" />
          </div>
          <div className="col-8">
        <h4>Order Details</h4>
          <div>Name : {data.fullname}</div>
          <div>Email : {data.email}</div>
          <div>Phone Number : {data.fullname}</div>
          <div>Address : {data.address}</div>
        <h4>Product Details</h4>
        <div>Product Name : {data.Product.product}</div>
        <div>Product Rate : {data.Product.rate}</div>
        <div>Product Offer : {data.Product.offer} %</div>
        <div>Product Discount Rate : {data.Product.discountRate}</div>

          </div>
        </div>
      </div>
    })}
    </div>
  )
}

export default Orders