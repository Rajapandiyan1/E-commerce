import React from 'react'
import mobile from './images/mobile.webp'
import sport from './images/bat1.webp'
import tv from './images/tv.webp'
import camera from './images/camera.webp'
 import headset from './images/headset.webp'
 import laptop from './images/laptop.webp'
import { useDispatch } from 'react-redux'
import { setData } from './data/Searchdata'
import { useNavigate } from 'react-router-dom'

export default function MemoProduct() {
  let ser=useDispatch();
  let navigate=useNavigate()
  function viewProduct(com,search) {
    ser(setData([com,search]))
    navigate('/Product')
  }
  return (
    <div className='row me-0 ms-0 mt-3'>
      <div className="col-sm-2 d-flex justify-content-center col-4 ">
        <div className="card w-100 mt-1 mb-1 card-h" name={'Mobile'} onClick={(e)=>{viewProduct('Home','Mobile')}}>
          <div className="card-img-top w-100">
            <img className='w-100 img-h'  src={mobile} alt="" />
          </div>
          <label htmlFor="" className='text-center memo-text font-w mb-2 form-check-label'>Mobiles</label>
        </div>
      </div>
      <div className="col-sm-2 d-flex justify-content-center col-4 ">
        <div className="card mt-1 mb-1 w-100 card-h" onClick={(e)=>{viewProduct('Home','Criket Bat')}}>
        <div className="card-img-top w-100">
          <img className='w-100 img-h p-1'  src={sport} alt="" />
        </div>
        <label htmlFor="" className='text-center mb-2 memo-text font-w'>Sports</label>
      </div></div>

      <div className="col-sm-2 d-flex justify-content-center col-4 ">
        <div className="card mt-1 mb-1 w-100 card-h" onClick={(e)=>{viewProduct('Home','Tv')}}>
        <div className="card-img-top w-100">
          <img className='w-100 img-h p-1'  src={tv} alt="" />
        </div>
        <label htmlFor="" className='memo-text text-center mb-2 font-w'>Tv</label>
      </div></div>
      <div className="col-sm-2 d-flex justify-content-center col-4 ">
        <div className="w-100 card mt-1 mb-1 card-h" onClick={(e)=>{viewProduct('Home','Camera')}}>
        <div className="card-img-top w-100">
          <img className='w-100 img-h p-1'  src={camera} alt="" />
        </div>
        <label htmlFor="" className='memo-text text-center mb-2 font-w'>Camera</label>
      </div></div>
      <div className="col-sm-2 d-flex justify-content-center col-4 ">
        <div className="w-100 card mt-1 mb-1 card-h" onClick={(e)=>{viewProduct('Home','Headset')}}>
        <div className="card-img-top w-100">
          <img className='w-100 img-h p-1 ne-1'  src={headset} alt="" />
        </div>
        <label htmlFor="" className='text-center memo-text mb-2 font-w'>Headset</label>
      </div></div>
      <div className="col-sm-2 d-flex justify-content-center col-4 ">
        <div className="w-100 card mt-1 mb-1 card-h" onClick={(e)=>{viewProduct('Home','Laptop')}}>
        <div className="card-img-top w-100">
          <img className='w-100 img-h p-1'  src={laptop} alt="" />
        </div>
        <label htmlFor="" className='text-center memo-text mb-2 font-w'>laptop</label>
      </div></div>
    </div>
  )
}
