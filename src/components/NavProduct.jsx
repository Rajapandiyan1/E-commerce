import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavProduct() {
    let home=useNavigate();
    function homes(params) {
        home('/E-commerce/')
    }
  return (
    <div className='row mt-2'>
        <div className="col-2 col-sm-1 ms-1 d-flex justify-content-center align-items-center" style={{fontSize:'25px'}}>
        <i onClick={()=>{homes()}} className="fa fa-arrow-left"></i>
        </div>
        <div className="col-7">
    <div className="input-group">
        <input type="search" placeholder='search product' className='form-control ' name="" id="" />
        <div className="input-group-text d-flex justify-content-center align-items-center">
        <i className='fa fa-search' style={{fontSize:'25px'}}></i>

        </div>
    </div>
        </div>
        <div className="col-2 ms-auto me-2 d-flex justify-content-center align-items-center" >
            <i className="fa fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" style={{fontSize:'25px'}}></i>
        </div>
         
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel1">Profile</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small">
    
  </div>
</div>
    </div>
  )
}

export default NavProduct