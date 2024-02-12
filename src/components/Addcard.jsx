import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Authen } from './Api/Autho'
import { setProducts } from './data/ProductdataStore'
import { useNavigate } from 'react-router-dom'


function Addcard() {
    let carddata=useSelector((data)=>{ return data.card})
    let Holeproduc=useSelector((data)=>{ return data.HolePro[0]})
  let [carddataof,setcard]=useState([]);
  let [show,setShow]=useState(false);
  let [valid,setvalid]=useState(true)
let Pstore=useDispatch()
  let nav=useNavigate()
    useEffect(()=>{
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
 setcard((prev)=>{
  if(prev.length > 0){
    setvalid(false)
  }
  return prev
 })
  },[])
  function submits(params) {
    
    if(Authen()){
console.log(carddataof)
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
  return (
    <div className='row'>
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
      {valid && <div className='col-12'>Invalid data of addcards</div>}
       {  !valid && carddataof.map((data,id)=>{
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
                <div className="col-4">
<label htmlFor="customRange2" className="form-label">Quantity : {data.Quan}</label>
<input type="range" className="form-range" onInput={(e)=>{edits(id,e.target.value)}} defaultValue={1} min="1" max="5" id="customRange2"/>
</div>
              </div>
            </div>
            
</div>

        </div>
        
           
       }) }
       {  !valid && <div className="col-12 mt-4 mb-4 d-flex justify-content-end">
        <button className="btn-success btn me-5" onClick={()=>{ submits()}}>Buy</button>
       </div>}
    </div>
  )
}

export default Addcard