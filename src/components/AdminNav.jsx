import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminNav({name}) {
  return (
            <>
<div className="row">
        <div className="col-12">
            <div className="navbar navbar-expand-md">
                <div className="navbar-brand">
                    E - commerce
                </div>
                <div className="navbar-toggler">
                    <div className="navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#admin1"></div>
                </div>
                <div className="collapse navbar-collapse" id='admin1'>

                <div className="navbar-nav ms-auto list-group mt-3 mt-md-0">
                    <Link className='text-decoration-none list-group-item' to='/admin/addproduct'>
                    
                    <div className="navbar-item me-2 ">Add product</div>
                    </Link>
                    
                    
                 <Link className='text-decoration-none list-group-item' to='/admin/orders'>
                 <div className="navbar-item me-2 ">orders</div>
                 </Link>
                    <Link to='/admin/newProduct' className='text-decoration-none list-group-item'>
                    <div className="navbar-item me-2 ">New Product</div>
                    </Link>
                     
                 <Link className='text-decoration-none list-group-item' to='/E-commerce/'>
                 <div className="navbar-item me-2 ">My site</div>
                 </Link>
                </div>
                </div>
            </div>
        </div>
</div>
        
        </>
  )
}
