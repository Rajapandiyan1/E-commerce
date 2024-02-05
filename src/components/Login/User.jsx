import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Authen } from '../Api/Autho'
import { datas } from '../Api/Getdata'
import { userData } from '../Api/Post'

function User() {
  let cer=useNavigate()
  let [loading,isloading]=useState(true)
  let [netErr,setNet]=useState(false)
  let [userD,setD]=useState({email:'',password:'',displayName:''});
  

  
  useEffect(()=>{
    let token= datas();
     userData(token).then((data)=>{setD(data.users[0])}).catch((e)=>{ setNet(true)}).finally(()=>{isloading(false)})
    },[]) 
    
  return (
<div className="row">
  {netErr && <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'450px'}}>Network error</div>}
  {!loading && !netErr &&<div className="col-12">
  <div className="row justify-content-center align-items-center" style={{minHeight:'450px'}}>
<div className="col-12 d-flex justify-content-center">

  <div className='font-w'>Wellcome New User of {userD.displayName}</div>
  {/* <Link to='/'>create Account</Link>
  <button className="btn btn-primary" onClick={()=>{create()}}>Create Account</button> */}
</div>
<div className="col-12 word-wrap">
  <div className='font-w'>Your Email : {userD.email}</div>
</div>
<div className="col-12">
  <div className='font-w'>Your Local - Id : {userD.localId}</div>
</div>
</div>
  </div>}
  {loading && <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'450px'}}>
    <span className='spinner-border'></span>
    </div>}
</div>

  )
}
export default User