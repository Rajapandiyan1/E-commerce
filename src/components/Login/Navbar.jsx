import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Navbar({login}) {
    let home=useNavigate()

    function homes(params) {
        home('/E-commerce/')
    }
  return (
    <div className="row bg-dark pt-2 pb-2"> 
    <div className="col-2 col-sm-1 ms-1 d-flex justify-content-center align-items-center" style={{fontSize:'25px'}}>
    <i onClick={()=>{homes()}} className="fa fa-arrow-left text-white"></i>
    
    </div>
    <div className="ms-auto me-3 col-2 col-sm-1 d-flex justify-content-center align-items-center">
    <button className="btn btn-primary btn-sm" onClick={()=> {home('/'+login)}}>
            {login}</button>
    </div>
    <div className="col-2 col-sm-1 d-flex justify-content-center align-items-center">
    <i className="fa fa-bars text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom2" style={{fontSize:'24px'}}></i>
        
    </div>
       
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBottom2" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Profile</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small">
    
  </div>
</div>
    </div>
  )
}
