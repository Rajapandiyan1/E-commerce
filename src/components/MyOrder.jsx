import React, { useEffect, useState } from 'react'
import { Authen } from './Api/Autho';
import { userData } from './Api/Post';
import { datas } from './Api/Getdata';
import { Link, useNavigate } from 'react-router-dom';
import { setUserdata } from './data/Userdata';
import { useDispatch } from 'react-redux';

function MyOrder() {
    let [login,setlogin]=useState(false);
    let [mrord,setmy]=useState([]);
    let [load,isloading]=useState(true);
    let [valid,setvalid]=useState(false);
    let nav=useNavigate()
  let [admin,setadmin]=useState(false);
  let [log,islog]=useState(false)
  let [userd,setusers]=useState(['','']);
  let usdata=useDispatch()
    let emails;
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
    useEffect(()=>{
        isloading(true)
        if(mrord.length > 0){
          setvalid(true)
        }
        else{
          setvalid(false)
        }
     async function user(params) {
            
        let data=datas()
        if(data){
           await userData(data).then((data)=>{return data}).then((data)=>{ 
           setusers([data.displayName,data.email]); usdata(setUserdata({name:data.displayName,email:data.email})); return data}).catch((e)=>{ console.log(e)})
        }
        if(!Authen()){
            localStorage.removeItem('Dashboard')
            setadmin(false)
        }
    }
      user()
        if(Authen()){
            setlogin(true);
            let token=datas()
            userData(token).then((data)=>{ emails=data.email })
        }
        else{
            setlogin(false)
        }
        
    },[])
    useEffect(()=>{
      async function filte(params) {
       await fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/Orders',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((data)=>{ return data.json()}).then((dat)=>{
          
            return dat.filter((datass)=>{ if(datass.UserEmail==emails){
                let d=datass.Product;
                return d;
            }});
        }).then((data)=>{console.log(data);
          if(data.length > 0){
            setvalid(true)
          }
          else{
            setvalid(false)
          }
          setmy(data); return data}).finally(()=>{
            isloading(false)
        })
      }
      filte()
    },[])
  return (
    <div className='row ' style={{marginTop:'70px'}}>
          
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBottom7" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">{(userd[0]!='') ?  userd[0] : 'User'} {admin && <span className='badge text-bg-success'>Owner</span>}</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small">
    {log && <h5>{userd[1]}</h5>}
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
            <i className="fa fa-bars text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom7" style={{fontSize:'23px'}}></i>
          </div>
        </div>
      </div>
      {!valid && login && !load && <div className='row'>
        <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
          Invalid Order
        </div>
      </div> }
        {!login && !valid && !load && <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className="row">
                <div className="col-12">
                    Alreary Account created Please <Link to={'/login'} className='text-decoration-none'>Login</Link> or <Link to={'/Register'} className='text-decoration-none'>Register</Link>
                </div>
            </div>
            </div>}
        { load && <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>

            <div className='spinner-border text-primary ' ></div>
            </div>}
       {login && !load && mrord.map((data,id)=>{
           return data.Product.map((da,id)=>{
                return <div className="col-12 " key={id}> 
                <div className="row justify-content-center border rounded hov-order  m-1">

<div className="col-6 col-sm-3 mt-3 mt-sm-0 d-flex align-items-center">
<img src={da.url} alt="" className='w-100 ratioa' />
</div>
<div className="col-12 col-sm-9 hov-bg rounded-3">
  <div className="row">
    <div className="col-12 mt-2">
     <span className='hov-text'>Product name : </span> {da.product}
    </div>
    <div className="col-12 mt-2">
      <div className='mt-2'><span className='hov-text'>Product Rate : </span>{da.rate}</div><div className='mt-2'><span className='hov-text'>Offer percentage : </span>{da.offer} % </div><div className='mt-2'><span className='hov-text'>Discount Rate : </span>{Math.round(da.discountRate)}</div>
    </div>
    <div className="col-12 mb-1">
      <span className='hov-text'>Quantity : <span>{da.Quan==undefined ? '1' : da.Quan}</span></span>
    </div>
  </div>
</div>

</div>
        </div>
            })
       })} 

    </div>
  )
}

export default MyOrder