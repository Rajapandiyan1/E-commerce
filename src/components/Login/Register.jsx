import React, { useState } from 'react'
import { Navigate, useNavigate, useH, Link } from 'react-router-dom'
import { Authen, log, login } from '../Api/Autho';
import { useDispatch } from 'react-redux';
import { sear } from '../Store/Load';
import { Post } from '../Api/Post';
import { datas, setToken } from '../Api/Getdata';
import { Navbar } from './Navbar';

function Register() {
  let [loading, isloading] = useState(false)
 let [cusErr,setcus]=useState(false)
  let [err,setErr] = useState({displayName:false,email:false,password:false,custom:false});
  let [error,setError]=useState(true)
  let nav = useNavigate();
  let dis = useDispatch();
  let [mess,errMes]=useState(null);
  let [data,setData]=useState({displayName:'',email:'',password:''})
  
  function getDatas(datas) {
    setData((prev)=>{return {...prev,[datas.target.name]:datas.target.value}})
  }
  
  function createAccount(params) {
    setErr({displayName:false,email:false,password:false,custom:false})
    setError(true)
    setcus(false)
    if(data.displayName ==''){
      setErr((prev)=>{return {...prev,displayName:true}})
    setError(false)
    }
    if(data.email == ''){
    setErr((prev)=>{return {...prev,email:true}})
    setError(false)
    }
    if(data.password == ''){
    setErr((prev)=>{return {...prev,password:true}})
    setError(false)
    }
     isloading(true)
        setError((error)=>{
      if(error){

        Post(data).then((dat)=>{
          if(dat.idToken != null){
            setToken(dat.idToken)
            if(Authen()){
              nav('/E-commerce/')
              }
          }
         if(dat.error.code==400){
        setcus(true)
        errMes(dat.error.message)
         }
        }).then(()=>{isloading(false)}).catch((e)=>{
        }).finally(()=>{
            isloading(false)
          })
      }
      else{
        isloading(false)
      }
     })
     
      
  }
  return (
    <>
    <Navbar login={'login'}/>
    <div className="row justify-content-center mt-3" style={{minHeight:'51vh'}}>
      <div className="col-12">
      <div className='row justify-content-center'>
        <div className="col-11 col-md-9 text-center">
          <h1>Register Page</h1>
        </div>
        <div className="col-11  col-md-9 mt-3">
          <label htmlFor="" className='form-label'>Username</label>
          </div>
          <div className="col-11 col-md-9 mt-2">
            <input type="text" placeholder='Enter your Name' onChange={(e)=>{getDatas(e)}} className='form-control' name="displayName" id="" />
          </div>
          {err.displayName &&<div className='col-11 col-md-9 mt-1 text-danger'>Invalid UserName</div>}
        <div className="col-11 col-md-9 mt-3">
          <label htmlFor="" className='form-label'>Email</label>
        </div>
        <div className="col-11 col-md-9 mt-2">
          <input type="text" placeholder='Enter your email' className='form-control' onChange={(e)=>{getDatas(e)}} name="email" id="" />
        </div>
        {err.email &&<div className='col-md-9 col-11 mt-1 text-danger'>Invalid Email</div>}
        <div className="col-11 col-md-9 mt-3">
          <label htmlFor="" className='form-label'>Password</label>
        </div>
        <div className="col-11 col-md-9 mt-2">
          <input type="password" placeholder='Enter your password' className='form-control' onChange={(e)=>{getDatas(e)}} name="password" id="" />
        </div>
        {err.password &&<div className='col-11 col-md-9 mt-1 text-danger'>Invalid Password</div>}
      {cusErr && <div className='col-11 col-md-9 mt-1'>{mess}</div>}
        {loading && <div className="col-11 col-md-9 mt-5 d-flex justify-content-center">
          <span className='spinner-border'></span>
        </div>}
        <div className="col-11 col-md-7 mt-3">
          <div className="row">

        <div className="col-8 mt-1 ">
          <span>Account <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></span>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <button style={{height:'30px'}} className="btn btn-primary btn-sm" disabled={loading} onClick={() => { createAccount() }}>Create</button>
        </div>
          </div>
        </div>
      </div>
      </div>
    </div>
      

    </>

  )
}
export default Register