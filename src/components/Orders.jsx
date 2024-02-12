import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { reset } from './data/ProductdataStore';

function Orders() {
  let [count,setcount]=useState(0);
  let [orders,setOrders]=useState([]);
  let dis=useDispatch()
  let [load,isloading]=useState(true);
  let [valid,isvalid]=useState(true);
  useEffect(()=>{

  },[orders])
  useEffect(()=>{
    
    fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/Orders',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((data)=>{return data.json()}).then((data)=>{console.log(data); return data}).then((data)=>{setOrders([...data]); isloading(false)})
            if(orders.length > 0){
              isvalid(true)
            }else{
              isvalid(false)
            }
  },[])
  return (
    <div className='row'>
      {!valid && !load && <div className='col-12 d-flex justify-content-center align-items-center'  style={{height:'100vh'}}>Invalid Order</div>}
     {load &&<div className="col-12 d-flex justify-content-center align-items-center" style={{height:'75vh',marginTop:'10vh'}}>
   <span className='spinner-border text-success'></span>
      </div>}
      
    {!load && valid && orders.map((data,id)=>{
     return data.Product.map((daas)=>{
//  {setcount((prev)=> {return prev+1 })}
    return <div className="col-12 mt-2 mb-2 border pt-2 pb-2" key={count}>
        <div className="row">
          <div className="col-4">
            <img className='w-100 ratioa' src={daas.url} alt="" />
          </div>
          <div className="col-8">
        <h4>Order Details</h4>
          <div>Name : {data.fullname}</div>
          <div>Email : {data.email}</div>
          <div>Phone Number : {data.fullname}</div>
          <div>Address : {data.address}</div>
        <h4>Product Details</h4>
        <div>Product Name : {daas.product}</div>
        <div>Product Rate : {daas.rate}</div>
        <div>Product Offer : {daas.offer} %</div>
        <div>Product Discount Rate : {daas.discountRate}</div>

          </div>
        </div>
      </div>
     })
    })}
    </div>
  )
}

export default Orders