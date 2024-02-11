import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Addcard() {
    let carddata=useSelector((data)=>{ return data.card})
    let Holeproduc=useSelector((data)=>{ return data.HolePro[0]})
  let [carddataof,setcard]=useState([])
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
 setcard(carddatas)
  },[])
  return (
    <div className='row'>
       {carddataof.map((data,id)=>{
        return <div className="col-12">
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
              </div>
            </div>
            
</div>

        </div>
        
           
       }) }
    </div>
  )
}

export default Addcard