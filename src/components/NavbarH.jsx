import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setData } from './data/Searchdata';
import { Authen } from './Api/Autho';

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
        if(!Authen()){
            localStorage.removeItem('Dashboard')
        }
    let token= localStorage.getItem('Dashboard');
    if(token != null){
        setadmin(true)
        setinres('col-8 col-sm-9 col-md-10')
    }
    else{
        setinres(false)
        setinres('col-12')
    }
    },[])
    function Prod(params) {
        if(fil != ''){
senddata(setData(['Search',fil]))
        
        moveProduct('/Product')}
    }
  return (
    <div className="row me-0 ms-0 border">
        <div className="memo-text-m ps-2 ps-sm-3 col-5 col-sm-5 col-lg-2 order-1 order-lg-1  mt-lg-0 justify-content-start align-items-center d-flex   text-warning mt-2">
            E-commerce
        </div>
        <div className="col-2 col-sm-1 ms-sm-auto ms-lg-auto order-2 me-3  me-sm-4 me-lg-0 col-lg-1 justify-content-md-end order-lg-3 order-lg-2 pe-0 ps-0 mt-lg-0 justify-content-center align-items-center d-flex  mt-2">
            <button className="btn-success btn btn-sm" onClick={()=> {moveProduct('/Register')}}>
            Register</button>
            </div>
        <div className="col-2 col-sm-1 col-lg-1 pe-0 ps-0  col-md-1 col-lg-1 order-3 order-lg-4 mt-lg-0 justify-content-md-end justify-content-center align-items-center  d-flex mt-2">
            <button className="btn btn-primary btn-sm" onClick={()=> {moveProduct('/login')}}>
            Login</button></div>
            {admin && <div className="col-4 pe-0 ms-lg-4 d-none d-lg-flex col-sm-2 col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-sm-end justify-content-center order-6 mt-1  d-flex align-items-center">
            <button onClick={()=>{moveProduct('/admin') }} className="btn btn-primary btn-sm memo-text">
                Dashboard
            </button>
        </div>}
            <div className="col-2 col-lg-1 ps-0 pe-0 col-sm-1 col-md-1  order-lg-5 mt-lg-1 mb-lg-1 order-4 mt-lg-0  mt-2 d-flex ms-1 justify-content-center align-items-center">
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
        {admin && <div className="col-4 pe-3 col-md-2 d-lg-none col-sm-3 col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-center  order-5 mt-1  d-flex align-items-center">
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
