import React, { useEffect, useState } from 'react'
import { Authen } from './Api/Autho';
import { userData } from './Api/Post';
import { datas } from './Api/Getdata';
import { Link } from 'react-router-dom';

function MyOrder() {
    let [login,setlogin]=useState(false);
    let [mrord,setmy]=useState([]);
    let [load,isloading]=useState(true)
    let emails;
    useEffect(()=>{
        isloading(true)
        if(Authen()){
            setlogin(true);
            let token=datas()
            userData(token).then((data)=>{ emails=data.users[0].email })
        }
        else{
            setlogin(false)
        }
        fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/Orders',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((data)=>{ return data.json()}).then((dat)=>{
            return dat.filter((datass)=>{ if(datass.UserEmail==emails){
                let d=datass.Product;
                return d;
            }});
        }).then((data)=>{ setmy(data)}).finally(()=>{
            isloading(false)
        })
    },[])
  return (
    <div className='row mt-5'>
        {!login && <div className='col-12 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
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
                return <div className="col-12" key={id}> 
                <div className="row">

<div className="col-3">
<img src={da.url} alt="" className='w-100 ratioa' />
</div>
<div className="col-9">
  <div className="row">
    <div className="col-12 mt-2">
     <span>Product name : </span> {da.product}
    </div>
    <div className="col-12 mt-2">
      <div className='mt-2'><span>Product Rate : </span>{da.rate}</div><div className='mt-2'><span>Offer percentage : </span>{da.offer} % </div><div className='mt-2'><span>Discount Rate : </span>{da.discountRate}</div>
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