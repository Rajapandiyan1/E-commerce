import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setData } from './data/Searchdata';
import { Authen } from './Api/Autho';
import { datas } from './Api/Getdata';
import { userData } from './Api/Post';
import { CheckAdmin } from './data/CheckAdmin';
import { setUserdata } from './data/Userdata';

export default function NavbarH() {
    let moveProduct =useNavigate();
    let [fil,fildatas]=useState('');
    let [admin,setadmin]=useState(false);
    let [log,islog]=useState(false)
    let [inres,setinres]=useState('')
    let senddata=useDispatch();
    let [userd,setusers]=useState(['','']);
    let usdata=useDispatch()
    function fildata(data) {
        fildatas(data)
    }
    useEffect(()=>{
        function admins(params) {
            
            CheckAdmin(setadmin)
        }
        admins();
        if(log){
            setinres('col-8 col-sm-9 col-md-10')
        
        }else{
            setinres(false)
            setadmin(false)
            setinres('col-12')
        }
        if(admin){
            setinres('col-8 col-sm-9 col-md-10')
        
        }else{
            setinres(false)
            setadmin(false)
            setinres('col-10 col-sm-11')
        }
    },[admin])
    useEffect(()=>{
        async function user(params) {
            
            let data=datas();
            if(data){
               await userData(data).then((data)=>{ return data.users[0]}).then((data)=>{ 
               setusers([data.displayName,data.email]); usdata(setUserdata({name:data.displayName,email:data.email}))})
            }
            if(!Authen()){
                localStorage.removeItem('Dashboard')
                setadmin(false)
            }
        }
          user()
        if(Authen()){
           islog(true)
        }
        else{
            islog(false)
        }
    let token= localStorage.getItem('Dashboard');
    },[admin])
    function Prod(params) {
        if(fil != ''){
senddata(setData(['Search',fil]))
        
        moveProduct('/Product')}
    }
   async  function logout(params) {
        localStorage.removeItem('Token');
        localStorage.removeItem('Dashboard');
        if(Authen()){
            alert('not')
            islog(true)
            setadmin(true)
        }
        else{
            setadmin(false)
            islog(false)
        }
    }
  return (
    <div className="row bg-dark fixed-top me-0 ms-0 border  pb-1">
        <div className="memo-text-m ps-2 ps-sm-3 col-5 col-sm-5 col-lg-2 order-1 order-lg-1  mt-lg-0 justify-content-start align-items-center home-t d-flex   text-white mt-2">
            E-commerce
        </div>
        <div className="col-2 col-sm-1 ms-sm-auto ms-lg-auto order-2 me-3  me-sm-4 me-lg-0 col-lg-1 justify-content-md-end order-lg-3 order-lg-2 pe-0 ps-0 mt-lg-0 justify-content-center align-items-center d-flex  mt-2">
            <button className="btn-success btn btn-sm home-t" onClick={()=> {moveProduct('/Register')}}>
            Register</button>
            </div>
        <div className="col-2 col-sm-1 col-lg-1 pe-0 ps-0  col-md-1 col-lg-1 order-3 order-lg-4 mt-lg-0 justify-content-md-end justify-content-center align-items-center  d-flex mt-2">
            <button className="btn btn-primary btn-sm home-t" onClick={()=> {moveProduct('/login')}}>
            Login</button></div>
            {(admin) ? <div className="col-4 pe-0 ms-lg-4 d-none d-lg-flex col-sm-2 col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-sm-end justify-content-center order-6 mt-1  d-flex align-items-center home-t">
            <button onClick={()=>{moveProduct('/admin') }} className="btn home-t btn-primary btn-sm memo-text">
                Dashboard
            </button>
        </div> : <div className='col-2 pe-0 ms-lg-1 d-none d-lg-flex col-sm-2 col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-sm-center justify-content-center order-6 mt-1  d-flex align-items-center home-t'><i className="text-white fas fa-shopping-cart"></i></div>}
            <div className="col-2 col-lg-1 ps-0 pe-0 col-sm-1 col-md-1  order-lg-5 mt-lg-1 mb-lg-1 order-4 mt-lg-0  mt-2 d-flex ms-1 justify-content-center align-items-center">
            <i className="fa fa-bars text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" style={{fontSize:'24px'}}></i>
            </div>
        <div className={' col-lg-4  order-lg-2 order-5 mb-lg-1 mt-lg-1 justify-content-center align-items-center d-flex  mt-3 mb-2 '+inres}>
            <div className="input-group ">
                <input type="search" placeholder='search products' onChange={(e)=>{fildata(e.target.value)}} className='form-control' name="" id="" />
                <div className="input-group-text">
                <i onClick={()=>{Prod()}} className="fa fa-search"></i>
                </div>
            </div>

        </div>
        {(admin) ? <div className="col-4 pe-3 col-md-2 d-lg-none col-sm-3 col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-center  order-5 mt-1  d-flex align-items-center">
            <button onClick={()=>{moveProduct('/admin') }} className="btn btn-primary btn-sm memo-text home-t">
                Dashboard
            </button>
        </div> : <div className='col-2 pe-3 col-md-1 d-lg-none col-sm-2 col-lg-1 mt-lg-1 mb-lg-1 order-lg-5 ps-0 justify-content-center  order-5 mt-1  d-flex align-items-center text-white'><i className="text-white fas fa-shopping-cart"></i></div> }
        
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">{(userd[0]!='') ?  userd[0] : 'User'} {admin && <span className='badge text-bg-success'>Owner</span>}</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small">
    {log && <h5>{userd[1]}</h5>}
    <h5 className='mt-4 mb-4'>My Order</h5>
    {!log && <div className='row mt-5'>
        <div className="col-6 "><button onClick={()=>{ moveProduct('/Register')}} className="btn btn-success">Register</button></div>
        <div className="col-6 "><button onClick={()=>{ moveProduct('/login')}} className="btn btn-primary">Login</button></div>
    </div> }
    <div>{log && <button onClick={()=>{logout()}} className="btn btn-warning">Log out</button>}</div>
  </div>
</div>
    </div>
  )
}
