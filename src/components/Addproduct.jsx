import React, { useEffect, useState } from 'react'

export default  function Addproduct() {
  let [opt,setOption]=useState([]);
  let [data,setdata]=useState({product:'',url:'',rate:'',offer:'',discountRate:0,optionValue:-1});
   let [output,setoutput]=useState(false);
   let [clone,setclone]=useState({product:'',url:'',rate:'',offer:'',discountRate:0,optionValue:-1})
  function calculate(e) {
    setdata((prev)=>{ return {...prev,offer:e.target.value}});
    setdata((prev)=>{return {...prev,discountRate:(prev.rate*prev.offer/100)-prev.rate}})
  }
  function Submits(params) {
    setclone(data)
    setdata({product:'',url:'',rate:'',offer:'',discountRate:0,optionValue:-1})
    if(data.offer != '' && data.product != '' &&data.rate != '' &&data.url != ''){
      setoutput(true)
    }
  }
  function uploadProduct(params) {
    alert('Upload success')
  }
  useEffect(()=>{
   async function optiondata() {
      fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce',{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      }).then((data)=>{return data.json()}).then((data)=>{ setOption(data); data.map((datas)=>{})})
    }
    optiondata()
  },[])
  return (
    <div className="row justify-content-center">

        <div className='col-12 col-md-6'>
          <div className="row">
            <div className="col-12 mt-2">
              <select value={data.optionValue} onChange={(e)=>{setdata((prev)=>{return {...prev,optionValue:e.target.value}})}} name="Prouct add" id=""className='form-select'>
                <option value="-1"> Select Option </option>
                {opt.map((datas,id)=>{ return <option value={id} key={id}>{datas.Product}</option>})}
              </select>
              <option value=""></option>
            </div>
            <div className="col-12 mt-2">
              <label htmlFor="" className='form-label'>Product Name</label>
            </div>
            <div className="col-12 mt-2">
              <input type="text" value={data.product}  onInput={(e)=>{setdata((prev)=>{ return {...prev,product:e.target.value}})}} placeholder='Enter Product Name' className='form-control' name="" id="" />
            </div>
            <div className="col-12 mt-2">
              <label htmlFor="" className='form-label'>Product Img Url</label>
            </div>
            <div className="col-12 mt-2">
              <input type="text" value={data.url} onInput={(e)=>{setdata((prev)=>{ return {...prev,url:e.target.value}})}} placeholder='Enter Image url' name="" id="" className="form-control" />
            </div>
            <div className="col-4 mt-2"><label htmlFor="" className='form-label'>Rate </label></div>
            <div className="col-4 mt-2"><label htmlFor="" className='form-label'>Offer Percentage </label></div>
            <div className="col-4 mt-2"><label htmlFor="" className='form-label'>Offer Rate </label></div>
            <div className="col-4 mt-2"><input onInput={(e)=>{setdata((prev)=>{ return {...prev,rate:e.target.value}})}} type="number" value={data.rate} className='form-control' placeholder='Enter Product Rate' name="" id="" /></div>
            <div className="col-4 mt-2"><input onInput={(e)=>{ calculate(e)}} type="number" minLength={0} maxLength={100} value={data.offer} className='form-control' placeholder='Enter Product Rate' name="" id="" /></div>
            <div className="col-4 mt-2"><input  type="text"value={data.discountRate} disabled={true} className='form-control' placeholder='0' name="" id="" /></div>
          </div>
          <div className="col-12 mt-3 d-flex justify-content-end ">
            <button className="btn btn-primary me-5" onClick={()=>{Submits()}}>
              Submit
            </button>
          </div>
       {output && <div className="col-12 mt-4 col-md-6">
          <div className="row">
            <div className="col-4">
<img src={clone.url} alt="" height='100px'/>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-12">
                 <span>Product name : </span> {clone.product}
                </div>
                <div className="col-12">
                  <div><span>Product Rate : </span>{clone.rate}</div><div><span>Offer percentage : </span>{clone.offer} % </div><div><span>Discount Rate : </span>{clone.discountRate}</div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex  mb-5 mt-2 justify-content-end">
              <button className="btn btn-warning me-4 btn-sm " onClick={()=>{setoutput(false);setclone(null) }}>cancel</button>
              <button className="btn btn-success me-4 btn-sm" onClick={()=>{uploadProduct()}}>Upload Product</button>
            </div>
          </div>
        </div>}
        
        </div>
    </div>

  )
}
