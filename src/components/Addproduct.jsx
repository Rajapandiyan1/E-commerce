import React, { useEffect, useState } from 'react'

export default  function Addproduct() {
  let [opt,setOption]=useState([]);
  let [data,setdata]=useState({product:'',url:'',rate:'',offer:'',discountRate:0,optionValue:-1});
   let [output,setoutput]=useState(false);
   let [clone,setclone]=useState({product:'',url:'',rate:'',offer:'',discountRate:0,optionValue:-1})
   let [clicked,isclicked]=useState(false)
  function calculate(e) {
    setdata((prev)=>{ return {...prev,offer:e.target.value}});
    setdata((prev)=>{return {...prev,discountRate:prev.rate-(prev.rate*prev.offer/100)}})
  }
  function Submits(params) {
    setclone(data);
    setclone((prev)=>{
    
      return prev ; 
    })
    setdata({product:'',url:'',rate:'',offer:'',discountRate:0,optionValue:-1})
    if(data.offer != '' && data.product != '' &&data.rate != '' &&data.url != ''){
      setoutput(true)
    }
  }
 async function  uploadProduct(params) {
  isclicked(true)
let old= await fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce/'+parseInt(clone.optionValue+1)).then((data)=>{return data.json()}).then((data)=>{  return {productList:data[0].productList,Product:data[0].Product}})
 
let response = await fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce/'+parseInt(clone.optionValue+1),{
  method:"PUT",
  body:JSON.stringify({0:{Product:old.Product,productList:[...old.productList,clone]}}),
  headers:{
    'Content-Type':'application/json'
  }
}).then((data)=>{ if(data.status == 200){
setoutput(false);
setclone(null)
isclicked(false)
}})
  }
  useEffect(()=>{
   async function optiondata() {
      fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce',{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      }).then((data)=>{return data.json()}).then((data)=>{setOption(data); })
    }
    optiondata()
  },[])
  return (

    <div className="row justify-content-center" style={{height:'100vh', overflow:'scroll'}}>

        <div className='col-12 col-md-6'>
          <div className="row">
            <div className="col-12 mt-2">
              <select value={data.optionValue} onInput={(e)=>{setdata((prev)=>{  let sn=Number(e.target.value); return {...prev,optionValue:sn}})}} name="Prouct add" id=""className='form-select'>
                <option value="-1"> Select Option </option>
                {opt.map((datas,id)=>{ return <option value={id} key={id}>{datas[0].Product}</option>})}
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
          <div className="col-12 mt-3 d-flex justify-content-end">
            <button className="btn btn-primary me-5" onClick={()=>{Submits()}}>
              Submit
            </button>
          </div>
       {output && <div className="col-12 mt-4 col-md-12 mb-5" style={{marginTop:'300px'}}>
          <div className="row w-100 border">
            <div className="col-4">
<img src={clone.url} alt="" className='w-100 ratio ratio-4x3' height='200px'/>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-12 mt-2">
                 <span>Product name : </span> {clone.product}
                </div>
                <div className="col-12 mt-2">
                  <div className='mt-2'><span>Product Rate : </span>{clone.rate}</div><div className='mt-2'><span>Offer percentage : </span>{clone.offer} % </div><div className='mt-2'><span>Discount Rate : </span>{clone.discountRate}</div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex  mb-5 mt-2 justify-content-end">
              <button className="btn btn-warning me-4 btn-sm " onClick={()=>{setoutput(false);setclone(null) }}>cancel</button>
              <button className="btn btn-success me-4 btn-sm" disabled={clicked} onClick={()=>{uploadProduct()}}>Upload Product</button>
            </div>
          </div>
        </div>}
        
        </div>
    </div>

  )
}
