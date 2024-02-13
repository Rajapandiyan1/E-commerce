import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Authen } from './Api/Autho'
import {  setProducts } from './data/ProductdataStore'
import { Link, useNavigate } from 'react-router-dom'
import { CheckAdmin } from './data/CheckAdmin';
import { setUserdata } from './data/Userdata';
import { userData } from './Api/Post';
import { datas } from './Api/Getdata';
import { addcards, remc, remo, reset } from './data/Addcards';


function Addcard() {
    let carddata=useSelector((data)=>{ return data.card})
    let Holeproduc=useSelector((data)=>{ return data.HolePro[0]})
  let [carddataof,setcard]=useState([]);
  let [show,setShow]=useState(false);
  let [valid,setvalid]=useState(true)
  let [userd,setusers]=useState(['','']);
  let [admin,setadmin]=useState(false);
  let [log,islog]=useState(false)
  let usdata=useDispatch()

let Pstore=useDispatch()
useEffect(()=>{
  if(carddata.length > 0){
    
     setvalid(true)
   }
   else{
     setvalid(false)
   }
},[carddataof])

  let nav=useNavigate()
  useEffect(()=>{
    //  console.log(carddata)
    CheckAdmin(setadmin)
    if(Authen()){
      islog(true)
    }
    else{
      islog(false)
    }
    async function user(params) {
       
            
      let data=datas()
      if(data){
         await userData(data).then((data)=>{ return data.users[0]}).then((data)=>{ 
         setusers([data.displayName,data.email]); usdata(setUserdata({name:data.displayName,email:data.email}))}).catch((e)=>{ console.log(e)})
      }
      if(!Authen()){
          localStorage.removeItem('Dashboard')
          setadmin(false)
      }
  }
    user()
      let clone=[];
      let addcards=new Set(carddata);
      let data=addcards.entries()
      for(let d of data){
        clone.push(d[0])
      }
     
      let carddatas=clone.map((datas)=>{ let d= Holeproduc.filter((data)=>{ return (data.id==datas)});
      
      return d[0];
    });
   let d2= carddatas.map((data1,id)=>{ return {...data1,Quan:1}})
 setcard(d2)

  },[])
  function submits(params) {
    
    if(Authen()){
      Pstore(setProducts(carddataof))
      nav('/productdetails')
    }
    else{
      setShow(true);
    }
  }
  function edits(id,val) {
   let e= carddataof.map((data,ids)=>{ if(ids==id){
      return {...data,Quan:val}
    }else{return data} })
    setcard(e)
  }
  async  function logout(params) {
    localStorage.removeItem('Token');
    localStorage.removeItem('Dashboard');
    if(Authen()){
        islog(true)
        setadmin(true)
    }
    else{
        setadmin(false)
        islog(false)
    }
}
function Cancels(id) {
  setcard((prev)=>{ return prev.filter((data,ids)=>{ return (ids!=id)})});
  
  usdata(remo(id))
  setvalid(false)
}
function rest(params) {
  usdata(reset()); 
  setcard([])
}
  return (
    <div className='row ' style={{marginTop:'70px'}}>
        
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBottom6" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">{(userd[0]!='') ?  userd[0] : 'User'} {admin && <span className='badge text-bg-success'>Owner</span>}</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small">
    {log && <h5>{userd[1]}</h5>}
    <h5 className='mt-4 mb-4'><Link className='text-decoration-none' to={'/Myorder'}>My Order</Link></h5>
    {!log && <div className='row mt-5'>
        <div className="col-6 "><button onClick={()=>{ nav('/Register')}} className="btn btn-success">Register</button></div>
        <div className="col-6 "><button onClick={()=>{ nav('/login')}} className="btn btn-primary">Login</button></div>
    </div> }
    <div>{log && <button onClick={()=>{logout()}} className="btn btn-warning">Log out</button>}</div>
  </div>
</div>
      <div className="col-12">
        <div className="row justify-content-between bg-dark pt-3 pb-3 fixed-top">
          <div className="col-2 ms-3">
            <i className='fa text-white fa-arrow-left' onClick={()=>{nav('/E-commerce/')}} style={{fontSize:'23px'}}></i>
          </div>
          <div className="col-1 me-5">
            <i className="fa fa-bars text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom6" style={{fontSize:'23px'}}></i>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>Alert Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have Already account please Login or Register New Account</p>
          <div className="row justify-content-end pe-5">
            <div className="col-2 me-5"  onClick={()=>{nav('/login')}}><button className="btn btn-primary">Login</button></div>
            <div className="col-2 me-3" onClick={()=>{nav('/Register')}}><button className="btn btn-success">Register</button></div>
          </div>
        </Modal.Body>
         
      </Modal>
      {!valid && <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className='' >Invalid data of addcards</div>
            </div>
      }
    { valid &&  <div className='row me-0 mb-3 pe-0 ' style={{marginTop:'20px'}}>
  <div className="col-5 d-flex justify-content-end ms-auto me-0 pe-0"><button onClick={()=>{ rest();  }} className="btn-sm btn btn-danger">Reset All</button></div></div>}

       {  valid && carddataof.map((data,id)=>{
        return <div className="col-12"key={id}>
<div className="row">
            <div className="col-3">
<img src={data.url} alt="" className='w-100 ratioa' />
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-12 mt-2">
                 <span>Product name : </span> {data.product}
                </div>
                <div className="col-12 mt-2">
                  <div className='mt-2'><span>Product Rate : </span>{data.rate}</div><div className='mt-2'><span>Offer percentage : </span>{data.offer} % </div><div className='mt-2'><span>Discount Rate : </span>{data.discountRate}</div>
                </div>
                <div className="col-12">

<label htmlFor="customRange2" className="form-label">Quantity : <span>{data.Quan}</span></label>
                </div>
                <div className="col-4">
<input type="range" className="form-range" onInput={(e)=>{edits(id,e.target.value)}} defaultValue={1} min="1" max="5" id="customRange2"/>
</div>
<div className="col-12">
  <button className="btn btn-warning" onClick={()=>{Cancels(id)}}>Cancel</button>
</div>
              </div>
            </div>
            
</div>

        </div>
        
           
       }) }
       {  valid && <div className="col-12 mt-4 mb-4 d-flex justify-content-end">
        <button className="btn-success btn me-5" onClick={()=>{ submits()}}>Buy</button>
       </div>}
    </div>
  )
}

export default Addcard