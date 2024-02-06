import React, { useState } from 'react'

function NewProduct() {
  let [data,setData]=useState({Product:'',productList:[]});
  async function subtmits1(params) {
    let clone=data;
    setData({Product:'',productList:[]})
    if(data.Product != ''){

        fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce',{
      method:'POST',
      body:JSON.stringify(clone),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((data)=>{
return data.json();
    }).then((data)=>{
    console.log(data)})}
  }
  return (
    <div className='row justify-content-center'>
      <div className="col-12 col-lg-6 mt-5">
        <div className="row">
          <div className="col-12"><label htmlFor="" className="form-lable">Product </label></div>
          <div className="col-12 mt-3">
            <input type="text" value={data.Product} onInput={(e)=>{setData((prev)=>{ return {...prev,Product:e.target.value}})}} className='form-control' />
          </div>
          <div className="col-12 mt-3 d-flex justify-content-end">
            <button onClick={()=>{subtmits1()}} className="btn btn-success me-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct