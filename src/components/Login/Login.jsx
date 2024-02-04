import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Logi } from '../Api/Post'
import { setToken } from '../Api/Getdata'
import {Navbar} from './Navbar'
function Login() {
  let crea = useNavigate()
  let [loading, isloading] = useState(false)
  let [mess,errMes]=useState(null);
 let [cusErr,setcus]=useState(false)
  let [err, setErr] = useState({ email: false, password: false, custom: false });

  let [data, setData] = useState({ email: '', password: '' })
  let [error, setError] = useState(true)

  function getDatas(datas) {
    setData((prev) => { return { ...prev, [datas.target.name]: datas.target.value } })
  }
  function submits(params) {
    setErr({ email: false, password: false, custom: false })
    setError(true)
    if (data.email == '') {
      setErr((prev) => { return { ...prev, email: true } })
      setError(false)
    }
    if (data.password == '') {
      setErr((prev) => { return { ...prev, password: true } })
      setError(false)
    }
    isloading(true)
    setError((error) => {
      if (error) {
        Logi(data).then((dat) => { 
          setToken(dat.idToken);
          if(dat.idToken != null){
            setToken(dat.idToken);
            crea('/E-commerce/')
          }
          setcus(false)
          if(dat.error.code == 400){
          setcus(true);
          errMes(dat.error.message)
          }
         }).catch((err) => {
          
        }).finally(() => {
          isloading(false)
        })
      } else {
        isloading(false)
      }
    })

  }

  return (
    <>
    {/* <Navbar/> */}
    <div className='row justify-content-center me-0 ms-0 ' style={{minHeight:'50vh',marginTop:'10vh'}}>
<div className="col-12  d-flex align-items-center">
<div className="row justify-content-center">
<div className="col-12 col-md-7 text-center">
        <h1>Login Page</h1>
      </div>
      <div className="col-12 col-md-7 mt-4">
        <label htmlFor="" className='form-label'>Email</label>
      </div>
      <div className="col-12 col-md-7 mt-3">
        <input type="text" placeholder='Enter your email' className='form-control' onChange={(e) => { getDatas(e) }} name="email" id="" />
      </div>
      <div className="col-12 col-md-7 mt-2">
        {err.email && <div className='col-12 col-md-7  mt-1 text-danger'>Invalid Email</div>}
        
        <label htmlFor="" className='form-label'>Password</label>
      </div>
      <div className="col-12 col-md-7 mt-3">
        <input type="password" placeholder='Enter your password' className='form-control' onChange={(e) => { getDatas(e) }} name="password" id="" />
      </div>
      {err.password && <div className='col-12 col-md-7 mt-1 text-danger'>Invalid Password</div>}
      {cusErr && <div className='col-12 col-md-7 mt-2'>{mess}</div>}
      {loading && <div className="col-12 col-md-7 mt-5 d-flex justify-content-center">
        <span className='spinner-border'></span>
      </div>}
      <div className="col-12 col-md-7 mt-4">
        <div className="row">
        <div className="col-6 col-md-6 ">
        <span>create <Link style={{ textDecoration: 'none' }} to='/Register'>new account</Link></span>
      </div>
      <div className="col-6 col-md-6 d-flex justify-content-end" style={{height:'40px'}}>
        <button className="btn btn-primary h-80" disabled={loading} onClick={() => { submits() }}>Login</button>
      </div>
        </div>
      </div>

</div>
</div>
    </div>
    </>
  )
}

export default Login