import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetails from './ProductDetails'
import { useNavigate } from 'react-router-dom'
import { setProduct, setProducts } from './data/ProductdataStore'
import { Modal } from 'react-bootstrap';
import { Authen } from './Api/Autho'
export default function SearchProduct({prud,load}) {
  let Pstore=useDispatch()
  let nav=useNavigate()
  let [data,setdata]=useState([])
  const [show, setShow] = useState(false);
  let [valid,isvalid]=useState(false)
  useEffect(()=>{
    if(prud.length > 0){
      isvalid(true)
    }
    else{
      isvalid(false)
      
    }
   setdata(prud)
  },[prud])
  function ProductDet(datas) {
    if(Authen()){
      Pstore(setProducts(datas))
      nav('/productdetails')
    }
    else{
      setShow(true);
    }
  }
  return (
    <div className='col-12 col-lg-12'>
      <Modal show={show} onHide={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>Alert Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have Already account please Login or Register New Account</p>
          <div className="row justify-content-end pe-5">
            <div className="col-2"  onClick={()=>{nav('/login')}}><button className="btn btn-primary">Login</button></div>
            <div className="col-2" onClick={()=>{nav('/Register')}}><button className="btn btn-success">Register</button></div>
          </div>
        </Modal.Body>
         
      </Modal>
      {!valid  && <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>Product Not found</div>}
      {load && <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'71vh'}}>
        <span className="spinner-border text-success"></span>
        </div>}
      { !load && valid &&
      prud.map((data,id)=>{return <div className="row border" key={id} style={{minHeight:'80px'}}>
      <div className="col-5 d-flex align-items-center col-md-3  col-sm-4 col-lg-3">
        <img src={data.url}  className='ratioa w-100'  alt="" />
      </div>
      
      <div className="col-7 col-md-9 col-sm-8 col-lg-9">
      <div className='memo-text-1'><span className='memo-text-1'>Product  : </span>{data.product}</div>

     <div className='mt-1 memo-text-1'><span className='memo-text-1'>Product Rate : </span>{data.rate}</div>
    <div  className='mt-1 memo-text-1'><span className='memo-text-1'>Offer percentage : </span>{Math.round(data.offer)} % </div><div className='mt-1 memo-text-1'><span className='memo-text-1'>Discount Rate : </span>{Math.round(data.discountRate)}</div>
                </div>
                <div className="row mb-2 mt-2 justify-content-end">
                  <div className="col-4">
                <button className="btn btn-primary  btn-sm w-100" onClick={()=>{ ProductDet(data)}}>Buy</button>
                  </div>
                  <div className="col-6">
                <button className="btn btn-warning btn-sm w-100">Add Card</button>
                  </div>
                </div>
    </div>})}
    </div>
  )
}
