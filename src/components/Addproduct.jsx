import React, { useState } from 'react'

export default  function Addproduct() {
  let [data,setdata]=useState({product:'',url:'',rate:'',offer:'',discountRate:''});
   let [output,setoutput]=useState(false)
  function calculate(e) {
    setdata((prev)=>{ return {...prev,offer:e.target.value}});
    setdata((prev)=>{return {...prev,discountRate:prev.rate*prev.offer/100}})
  }
  function Submits(params) {
     setoutput(true)
  }
  return (
    <div className="row justify-content-center">

        <div className='col-12 col-md-6'>
          <div className="row">
            <div className="col-12 mt-3">
              <label htmlFor="" className='form-label'>Product Name</label>
            </div>
            <div className="col-12 mt-3">
              <input type="text" onChange={(e)=>{setdata((prev)=>{ return {...prev,product:e.target.value}})}} placeholder='Enter Product Name' className='form-control' name="" id="" />
            </div>
            <div className="col-12 mt-3">
              <label htmlFor="" className='form-label'>Product Img Url</label>
            </div>
            <div className="col-12 mt-3">
              <input type="text" onChange={(e)=>{setdata((prev)=>{ return {...prev,url:e.target.value}})}} placeholder='Enter Image url' name="" id="" className="form-control" />
            </div>
            <div className="col-4 mt-3"><label htmlFor="" className='form-label'>Rate </label></div>
            <div className="col-4 mt-3"><label htmlFor="" className='form-label'>Offer Percentage </label></div>
            <div className="col-4 mt-3"><label htmlFor="" className='form-label'>Offer Rate </label></div>
            <div className="col-4 mt-3"><input onChange={(e)=>{setdata((prev)=>{ return {...prev,rate:e.target.value}})}} type="number" className='form-control' placeholder='Enter Product Rate' name="" id="" /></div>
            <div className="col-4 mt-3"><input onInput={(e)=>{ calculate(e)}} type="number" minLength={0} maxLength={100} className='form-control' placeholder='Enter Product Rate' name="" id="" /></div>
            <div className="col-4 mt-3"><input type="text"value={data.discountRate} disabled={true} className='form-control' placeholder='0' name="" id="" /></div>
          </div>
          <div className="col-12 mt-3 d-flex justify-content-end ">
            <button className="btn btn-primary me-5" onClick={()=>{Submits()}}>
              Submit
            </button>
          </div>
       {output && <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-4">
<img src={data.url} alt="" height='100px'/>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-12">
                  {data.product}
                </div>
                <div className="col-12">
                  <div>{data.rate}</div><div>{data.offer}</div><div>{data.discountRate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>}
        </div>
    </div>

  )
}
