import React, { useEffect, useState } from 'react'
import { datas } from './Api/Getdata'
import { userData } from './Api/Post';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';
// import { reset } from './data/ProductdataStore';
function GetUserDetails({pdl}) {
    let [loginEmail,setLoginEmail]=useState('')
    let [submit,setsubmit]=useState(false);
    const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  let [checkdata,setcheck]=useState({name:false,email:false,phone:false,address:false});
    let dis=useDispatch();
    let dar=useSelector((data)=>{return data.ProductDetails})
    let navs=useNavigate()
    useEffect(()=>{
        let token=datas();
        if(token){
            userData(token).then((data)=>{ setLoginEmail(data.email)})
        }
        
    },[])
    let [userdata,setuserdata]=useState({fullname:'',email:'',phone:'',address:'',order:'Ordered',UserEmail:loginEmail})
    function submits(params) {
        console.log(checkdata)
        let cop;
        setcheck({name:false,email:false,phone:false,address:false})
        let clone=userdata
        setsubmit(true)
        if(clone.email==''){
            setcheck((prev)=>{ return {...prev,email:true}})
        }
        if(clone.phone==''){
            setcheck((prev)=>{ return {...prev,phone:true}})
        }if(clone.address==''){
            setcheck((prev)=>{ return {...prev,address:true}})
        }if(clone.fullname==''){
            setcheck((prev)=>{ return {...prev,name:true}})
        }
        setcheck((prev)=>{cop=prev;return prev });
        console.log(cop)
        if(clone.address != '' && clone.fullname != '' && clone.email != '' && clone.phone != ''){
            fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/Orders',{
                method:'POST',
                body:JSON.stringify({...userdata,Product:pdl,UserEmail:loginEmail}),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((data)=>{return data.json()}).then((data)=>{
                
                setToastMessage('Success!');
                setToastType('success');
                setShowToast(true);
                // This line write to Toast message of success and faild
            }).finally(()=>{
                setTimeout(() => {
                    navs('/E-commerce/')
                    setuserdata({fullname:'',email:'',phone:'',address:''});
                    setsubmit(false)
                }, 4000);
                
            })
        }else{
            setsubmit(false)
        }
    }
  return (
    <div className='row justify-content-center mb-5'>
        <div className="col-12 d-flex justify-content-center">
        <Toast className='z' show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
        <Toast.Header className='bg-success'>
          <strong className={`ms-auto text-white text-${toastType}`}>{toastType === 'success' ? 'Success' : 'Error'}</strong>
        </Toast.Header>
        <Toast.Body className='fw'>Order Successfully </Toast.Body>
      </Toast>
        </div>
        <div className="col-12 mt-2 mb-2 col-lg-7 col-md-8">
            <h1>Order Details</h1>
        </div>
        <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label"> Full Name</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <input type="text" disabled={submit} value={userdata.fullname} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,fullname:e.target.value}})}} className="form-control border border-dark" />
                {checkdata.name && <label className='form-label text-danger'> Enter your fullname</label>}
            </div>
            <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label">Mobile Number</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <input type="number" disabled={submit} value={userdata.phone} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,phone:e.target.value}})}} className="form-control border border-dark" />
                {checkdata.phone && <label className='form-lable text-danger'>Enter your phone number</label>}
            </div>
            <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label"> Email</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <input type="email" disabled={submit} value={userdata.email} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,email:e.target.value}})}} className="form-control border border-dark" />
                {checkdata.email && <label className='form-label text-danger'>Enter your email</label>}
            </div>
            <div className="col-12 col-lg-7 col-md-8">
            <label htmlFor="" className="form-label"> Address</label>
        </div>
            <div className="col-12 col-md-8 col-lg-7">
                <textarea disabled={submit} value={userdata.address} onInput={(e)=>{setuserdata((prev)=>{ return {...prev,address:e.target.value}})}} className='form-control border-dark'></textarea>
           {checkdata.address && <label className='form-label text-danger'>Enter your address</label>}
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