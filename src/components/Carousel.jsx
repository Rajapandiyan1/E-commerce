import React, { useEffect } from 'react'
import cour1 from './images/Caro-1.webp'
import head from './images/head.avif'
import cycle from './images/cycle.webp'
import bootstrap from  'bootstrap/dist/js/bootstrap.bundle.js'
export default function Carousel() {
    useEffect(()=>{
    },[])
  return (
    <div className='row me-0 ms-0 mt-2'>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner rounded-2">
    <div className="carousel-item active">
      <img src={cour1} className="d-block w-100" height='280px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={head} className="d-block w-100" height='280px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={cycle} className="d-block w-100" height='280px' alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
