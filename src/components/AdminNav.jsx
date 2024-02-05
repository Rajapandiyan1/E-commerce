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
                    <div className="navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" ></div>
                </div>
                <div className="collapse navbar-collapse" id='navbarToggleExternalContent'>

                <div className="navbar-nav ms-auto list-group">
                    <Link to='/admin/addproduct' className='text-decoration-none list-group-item'>
                    
                    <div className="navbar-item me-2 ">Add product</div>
                    </Link>
                    
                    
                 <Link to='/admin/orders' className='text-decoration-none list-group-item'>
                 <div className="navbar-item me-2 ">orders</div>
                 </Link>
                    <Link to='/admin/feedback' className='text-decoration-none list-group-item'>
                    <div className="navbar-item me-2 ">Feed back</div>
                    </Link>
                    <Link className='text-decoration-none list-group-item'>
                    <div className="navbar-item me-2 ">New Product</div>
                    </Link>
                     
                 <Link to='/E-commerce/' className='text-decoration-none list-group-item'>
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
