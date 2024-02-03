import React from 'react'
import mobile from './images/mobile.webp'
import sport from './images/bat1.webp'
import tv from './images/tv.webp'
import camera from './images/camera.webp'
 import headset from './images/headset.webp'
 import laptop from './images/laptop.webp'

export default function MemoProduct() {
  return (
    <div className='row me-0 ms-0 mt-3'>
      <div className="col-sm-2 d-flex justify-content-center col-4 border">
        <div className="card mt-1 mb-1" style={{ height: '100px' }}>
          <div className="card-img-top">
            <img className='w-100' height='70px' src={mobile} alt="" />
          </div>
          <label htmlFor="" className='text-center memo-text form-check-label'>Mobiles</label>
        </div>
      </div>
      <div className="col-sm-2 d-flex justify-content-center col-4 border"><div className="card mt-1 mb-1" style={{ height: '100px' }}>
        <div className="card-img-top">
          <img className='w-100' height='70px' src={sport} alt="" />
        </div>
        <label htmlFor="" className='text-center memo-text'>Sports</label>
      </div></div>

      <div className="col-sm-2 d-flex justify-content-center col-4 border"><div className="card mt-1 mb-1" style={{ height: '100px' }}>
        <div className="card-img-top">
          <img className='w-100' height='70px' src={tv} alt="" />
        </div>
        <label htmlFor="" className='memo-text text-center'>Sports</label>
      </div></div>
      <div className="col-sm-2 d-flex justify-content-center col-4 border"><div className="card mt-1 mb-1" style={{ height: '100px' }}>
        <div className="card-img-top">
          <img className='w-100' height='70px' src={camera} alt="" />
        </div>
        <label htmlFor="" className='memo-text text-center'>Camera</label>
      </div></div>
      <div className="col-sm-2 d-flex justify-content-center col-4 border"><div className="card mt-1 mb-1" style={{ height: '100px' }}>
        <div className="card-img-top">
          <img className='w-100' height='70px' src={headset} alt="" />
        </div>
        <label htmlFor="" className='text-center memo-text'>Headset</label>
      </div></div>
      <div className="col-sm-2 d-flex justify-content-center col-4 border"><div className="card mt-1 mb-1" style={{ height: '100px' }}>
        <div className="card-img-top">
          <img className='w-100' height='70px' src={laptop} alt="" />
        </div>
        <label htmlFor="" className='text-center memo-text'>laptop</label>
      </div></div>
    </div>
  )
}
