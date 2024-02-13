import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GetUserDetails from './GetUserDetails'
import { adminCheck } from './Api/Getdata'
import { CheckAdmin } from './data/CheckAdmin'
function ProductDetails() {
    let dataforProduct=useSelector((data)=>{let d= data.ProductDetails[0];  return d})
    let [admin,setadmins]=useState(false)
    let homes=useNavigate()
  let userdata=useSelector((data)=>{ return data.userdataof})
    useEffect(()=>{
      // console.log(dataforProduct)
        CheckAdmin(setadmins);
    },[])
    
    function logout(params) {
      localStorage.removeItem('Token')
      homes('/E-commerce')
    }
  return (
    <>
    
    <div className='row marg-p'>
<div className="col-12">
<div className='row fixed-top fixed-top bg-dark pt-3 pb-3'>
        <div className="col-2 col-sm-1 ms-1 d-flex justify-content-center align-items-center" style={{fontSize:'25px'}}>
        <i onClick={()=>{homes('/E-commerce/')}} className="text-white fa fa-arrow-left"></i>
        </div>
        <div className="col-2 ms-auto me-2 d-flex justify-content-center align-items-center" >
          <i className="fa fa-bars text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" style={{fontSize:'25px'}}></i>
        </div>
         
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">{(userdata[0]!='') ?  userdata[0].name : 'User'} {admin && <span className='badge text-bg-success'>Owner</span>}</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <h6>{userdata[0].email}</h6>
  <button onClick={()=>{logout()}} className="btn btn-warning">Log out</button>
  </div>
</div>
    </div>
    
</div>

    </div>
<div className="row border mt-5 rounded-3" style={{height:'200px',overflowY:'scroll'}}>
{dataforProduct.map((data,id)=>{
  return <div className="col-12 mt-2 mb-2" key={id}>
    <div className="row justify-content-center">


<div className="col-6 col-sm-5 d-flex align-items-center col-lg-3">
        <img src={data.url}  className='ratioa w-100'  alt="" />
      </div>
      
      <div className="col-12 col-sm-7  col-lg-9">
      <div className='memo-text-1'><span className='memo-text-1'>Product  : </span>{data.product}</div>

     <div className='mt-1 memo-text-1'><span className='memo-text-1'>Product Rate : </span>{data.rate}</div>
    <div  className='mt-1 memo-text-1'><span className='memo-text-1'>Offer percentage : </span>{Math.round(data.offer)} % </div><div className='mt-1 memo-text-1'><span className='memo-text-1'>Discount Rate : </span>{Math.round(data.discountRate)}</div>
    <div className='mt-1 memo-text-1'> Quantity :  {(data.Quan==undefined ? 1 :data.Quan )}</div>
                </div>
    </div>
  </div>
})}
</div>
    <GetUserDetails pdl={dataforProduct}/>
    </>
  )
}

export default ProductDetails