import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Addcard() {
    let carddata=useSelector((data)=>{ return data.card})
    useEffect(()=>{
      let addcards=new Set(carddata)
   console.log(addcards)
    },[carddata])
  return (
    <div className='row'>
       {carddata.map((data,id)=>{
        return <div key={id} className="col-12">

</div>
       }) }
    </div>
  )
}

export default Addcard