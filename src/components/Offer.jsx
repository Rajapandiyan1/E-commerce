import React from 'react'
import shoe from './images/shoe.webp'
import belt from './images/belt.webp'
 import watch from './images/watch.webp'
import books from './images/books.webp'
function Offer() {
  return (
    <div className='row me-0 ms-0 justify-content-center justify-content-md-evenly'>
        <div className="col-12">Offers for 60%</div>
        <div className="col-6 col-sm-3  mt-2">
            <div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size'  src={shoe} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Addidas shoe</h6>
                    <span className="memo-text">20 - 35 % Offer</span>
                </div>
            </div>
        </div>
        
        <div className="col-6 col-sm-3  mt-2"><div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size'  src={belt} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Wooland Belt</h6>
                    <span className="memo-text">10 - 20 % Offer</span>
                </div>
            </div></div>
        <div className="col-6 col-sm-3  mt-2"><div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size'  src={watch} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Watch</h6>
                    <span className="memo-text">15 - 30 % Offer</span>
                </div>
            </div></div>
        <div className="col-6 col-sm-3  mt-2"><div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size'  src={books} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Books</h6>
                    <span className="memo-text">18 - 28 % Offer</span>
                </div>
            </div></div>
    </div>
  )
}

export default Offer