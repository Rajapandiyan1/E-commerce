import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { setData } from './data/Searchdata';

function NavProduct({sear}) {
    let home=useNavigate();
    let setStore=useDispatch()
    let [search,setSearch]=useState('');
    let searchdatas=useSelector((redux)=>{ return redux.search})
    useEffect(()=>{
      console.log(searchdatas)
        setSearch(searchdatas[1])
    },[])
    function homes(params) {
        home('/E-commerce/')
    }
    function setS(params) {
      setStore(setData("Search",search))
      sear(search)
    }
  return (
    <div className='row mt-2'>
        <div className="col-2 col-sm-1 ms-1 d-flex justify-content-center align-items-center" style={{fontSize:'25px'}}>
        <i onClick={()=>{homes()}} className="fa fa-arrow-left"></i>
        </div>
        <div className="col-7">
    <div className="input-group">
        <input type="search" placeholder='search product' value={search} onChange={(e)=>{setSearch((prev)=>{ return e.target.value })}} className='form-control ' name="" id="" />
        <div className="input-group-text d-flex justify-content-center align-items-center">
        <i className='fa fa-search' onClick={()=>{
          setS()
        }} style={{fontSize:'25px'}}></i>

        </div>
    </div>
        </div>
        <div className="col-2 ms-auto me-2 d-flex justify-content-center align-items-center" >
            <i className="fa fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" style={{fontSize:'25px'}}></i>
        </div>
         
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
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