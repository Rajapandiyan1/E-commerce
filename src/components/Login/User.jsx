import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Authen } from '../Api/Autho'
import { adminCheck, datas } from '../Api/Getdata'
import { userData } from '../Api/Post'
import AdminNav from '../AdminNav'
import {Link, Outlet} from 'react-router-dom'
function User() {
  let cer=useNavigate()
  let [loading,isloading]=useState(true)
  let [netErr,setNet]=useState(false)
  let [userD,setD]=useState({email:'',password:'',displayName:''});
  

  
  useEffect(()=>{

    let token= datas();
      if(!Authen() && !adminCheck ()){
    cer('/E-commerce/')
      }
     userData(token).then((data)=>{setD(data.users[0])}).catch((e)=>{ setNet(true)}).finally(()=>{isloading(false)})
    },[]) 
    
  return (
<>
  <AdminNav name={userD.displayName}/>
  <Outlet/>
</>


  )
}
export default User