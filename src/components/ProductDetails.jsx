import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GetUserDetails from './GetUserDetails'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function ProductDetails() {
    let dataforProduct=useSelector((data)=>{return data.ProductDetails[0]})
    let homes=useNavigate()

    useEffect(()=>{
        
    },[])
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
         
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
    </div>
    
</div>
<div className="row">


<div className="col-5 d-flex align-items-center col-md-3  col-sm-4 col-lg-3">
        <img src={dataforProduct.url}  className='ratioa w-100'  alt="" />
      </div>
      
      <div className="col-7 col-md-9 col-sm-8 col-lg-9">
      <div className='memo-text-1'><span className='memo-text-1'>Product  : </span>{dataforProduct.product}</div>

     <div className='mt-1 memo-text-1'><span className='memo-text-1'>Product Rate : </span>{dataforProduct.rate}</div>
    <div  className='mt-1 memo-text-1'><span className='memo-text-1'>Offer percentage : </span>{Math.round(dataforProduct.offer)} % </div><div className='mt-1 memo-text-1'><span className='memo-text-1'>Discount Rate : </span>{Math.round(dataforProduct.discountRate)}</div>
                </div>
</div>

    </div>
    <GetUserDetails pdl={dataforProduct}/>
    </>
  )
}

export default ProductDetails