import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setData } from './data/Searchdata';

export default function NavbarH() {
    let moveProduct =useNavigate();
    let [fil,fildatas]=useState('');
    let [admin,setadmin]=useState(false);
    let [inres,setinres]=useState('')
    let senddata=useDispatch()
    function fildata(data) {
        fildatas(data)
    }
    useEffect(()=>{
    let token= localStorage.getItem('Dashboard');
    if(token != null){
        setadmin(true)
        setinres('col-8 col-sm-9')
    }
    else{
        setinres(false)
        setinres('col-12')
    }
    },[])
    function Prod(params) {
        if(fil != ''){
senddata(setData(fil))
        
        moveProduct('/Product')}
    }
  return (
    <div className="row me-0 ms-0 border">
        <div className="memo-text-m ps-1 ps-sm-3 col-5 col-lg-2 order-1 order-lg-1  mt-lg-0 justify-content-start align-items-center d-flex   text-warning mt-2">
            E-commerce
        </div>
        <div className="col-2 ms-lg-auto ms-md-auto order-2 me-3 me-sm-0 col-lg-1 justify-content-md-end order-lg-3 order-lg-2 o mt-lg-0 justify-content-center align-items-center d-flex  mt-2">
            <button className="btn-success btn btn-sm" onClick={()=> {moveProduct('/Register')}}>
            Register</button>
            </div>
        <div className="col-2 col-lg-1 ms-lg-auto order-3 me-lg-4 order-lg-4 mt-lg-0 justify-content-md-end justify-content-center align-items-center  d-flex mt-2">
            <button className="btn btn-primary btn-sm" onClick={()=> {moveProduct('/login')}}>
            Login</button></div>
            {admin && <div className="col-4 ms-auto d-none d-lg-flex col-sm-2 col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-sm-end justify-content-center order-6 mt-1  d-flex align-items-center">
            <button onClick={()=>{moveProduct('/admin') }} className="btn btn-primary btn-sm memo-text">
                Dashboard
            </button>
        </div>}
            <div className="col-2 col-lg-1 ms-lg-auto pe-md-5 order-lg-5 mt-lg-1 mb-lg-1 order-4 mt-lg-0  mt-2 d-flex justify-content-center justify-content-sm-end align-items-center">
            <i className="fa fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" style={{fontSize:'24px'}}></i>
            </div>
        <div className={' col-lg-4    order-lg-2 order-5 mb-lg-1 mt-lg-1 justify-content-center align-items-center d-flex  mt-3 mb-2 '+inres}>
            <div className="input-group">
                <input type="search" placeholder='search products' onChange={(e)=>{fildata(e.target.value)}} className='form-control' name="" id="" />
                <div className="input-group-text">
                <i onClick={()=>{Prod()}} className="fa fa-search"></i>
                </div>
            </div>

        </div>
        {admin && <div className="col-4 ms-sm-auto d-lg-none col-sm-3 ms-lg-auto col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-end pe-sm-5 order-5 mt-1  d-flex align-items-center">
            <button onClick={()=>{moveProduct('/admin') }} className="btn btn-primary btn-sm memo-text">
                Dashboard
            </button>
        </div>}
        
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
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
