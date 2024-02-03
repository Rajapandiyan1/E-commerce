import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavbarH() {
    let moveProduct =useNavigate()
    function Prod(params) {
        moveProduct('/Product')
    }
  return (
    <div className="row me-0 ms-0 border">
        <div className="col-3  ms-3 ms-sm-1 mt-lg-0 justify-content-center align-items-center d-flex  order-lg-1 navbar-brand text-warning mt-2">
            E-commerce
        </div>
        <div className="col-1 mt-lg-0 justify-content-center align-items-center d-flex order-lg-3 ms-auto me-5 mt-2">
            <button className="btn-success btn btn-sm">
            Register</button>
            </div>
        <div className="col-1 mt-lg-0 justify-content-center align-items-center d-flex order-lg-4 me-4 mt-2">
            <button className="btn btn-primary btn-sm">
            Login</button></div>
            <div className="col-1 mt-lg-0 order-lg-5 me-2 mt-2 d-flex justify-content-center align-items-center">
            <i className="fa fa-bars" style={{fontSize:'24px'}}></i>
            </div>
        <div className="col-12 mb-lg-1 mt-lg-1 justify-content-center align-items-center d-flex order-lg-2 col-lg-4 order-4 mt-3 mb-2">
            <div className="input-group">
                <input type="search" placeholder='search products' className='form-control' name="" id="" />
                <div className="input-group-text">
                <i onClick={()=>{Prod()}} className="fa fa-search"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
