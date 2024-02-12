import React, { useEffect, useState } from 'react'
import { datas } from './Api/Getdata'
import { userData } from './Api/Post';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from './data/ProductdataStore';
function GetUserDetails({pdl}) {
    let [loginEmail,setLoginEmail]=useState('')
    let [submit,setsubmit]=useState(false);
    let dis=useDispatch()
    let navs=useNavigate()
    useEffect(()=>{
        let token=datas();
        if(token){
            userData(token).then((data)=>{ setLoginEmail(data.users[0].email)})
        }
        
    },[])
    let [userdata,setuserdata]=useState({fullname:'',email:'',phone:'',address:'',order:'Ordered',UserEmail:loginEmail})
    function submits(params) {
        let clone=userdata
        setsubmit(true)
        if(clone.address != '' && clone.fullname != '' && clone.email != '' && clone.phone != ''){
            fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/Orders',{
                method:'POST',
                body:JSON.stringify({...userdata,Product:pdl,UserEmail:loginEmail}),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((data)=>{return data.json()}).then((data)=>{
                
                setuserdata({fullname:'',email:'',phone:'',address:''});
                navs('/E-commerce/')
            }).finally(()=>{
                setsubmit(false)
                
            })
        }
    }
  return (
    <div className='row justify-content-center mb-5'>
        <div className="col-12 mt-2 mb-2 col-lg-7 col-md-8">
            <h1>Order Details</h1>
        </div>
        <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label"> Full Name</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <input type="text" value={userdata.fullname} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,fullname:e.target.value}})}} className="form-control border border-dark" />
            </div>
            <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label">Mobile Number</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <input type="number" value={userdata.phone} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,phone:e.target.value}})}} className="form-control border border-dark" />
            </div>
            <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label"> Email</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <input type="email" value={userdata.email} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,email:e.target.value}})}} className="form-control border border-dark" />
            </div>
            <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label"> Address</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <textarea value={userdata.address} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,address:e.target.value}})}} className='form-control border-dark'></textarea>
            </div>
            <div className="col-12 col-lg-7 col-md-8 mt-2 d-flex justify-content-end">
                <button disabled={submit} onClick={()=>{submits()}} className="btn btn-success">
                    Submit
                </button>
            </div>
    </div>
  )
}

export default GetUserDetails