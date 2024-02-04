import React from 'react'
import shoe from './images/shoe.webp'
import belt from './images/belt.webp'
 import watch from './images/watch.webp'
import books from './images/books.webp'
function Offer() {
  return (
    <div className='row me-0 ms-0 justify-content-center justify-content-md-evenly'>
        <h2 className="col-12">Offers</h2>
        <div className="col-6 col-sm-3  ps-lg-5 pe-lg-5  mt-2">
            <div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size p-2'  src={shoe} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Addidas shoe</h6>
                    <span className="memo-text font-w">20 - 35 % Offer</span>
                </div>
            </div>
        </div>
        
        <div className="col-6 col-sm-3  ps-lg-5 pe-lg-5  mt-2"><div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size p-2'  src={belt} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Wooland Belt</h6>
                    <span className="memo-text font-w">10 - 20 % Offer</span>
                </div>
            </div></div>
        <div className="col-6 col-sm-3  ps-lg-5 pe-lg-5 mt-2"><div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size p-2'  src={watch} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Watch</h6>
                    <span className="memo-text font-w">15 - 30 % Offer</span>
                </div>
            </div></div>
        <div className="col-6 col-sm-3  ps-lg-5 pe-lg-5  mt-2"><div className="card">
                <div className="card-img-top">
                    <img className='w-100 offer-size p-2'  src={books} alt="" />
                </div>
                <div className="card-footer">
                    <h6 className='memo-text'>Books</h6>
                    <span className="memo-text font-w">18 - 28 % Offer</span>
                </div>
            </div></div>
    </div>
  )
}

export default Offer