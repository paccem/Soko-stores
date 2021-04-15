import React from 'react'
import './components.css'
import {Link } from 'react-router-dom'

const StoreName = () => {
    return (
        <div className='container-fluid border-bottom'>
            <div className="container-fluid bg-primary">
                <div className="container py-3">
                    <div className='text-start text-white fs-5'>store made with <span className='fw-bold lead'>s<i className="fa fa-shopping-bag fs-6"></i>ko</span></div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="d-flex">
                                <Link to="/"><div className="sqare rounded-circle bg-light my-auto"><i className="fas fa-store fa-2x p-3"></i></div></Link>
                            
                                <div className="px-2">
                                    <div className="text-start">
                                        <h5>Target</h5>
                                        <p className='text-capitalize fs-6'>Cham Tower, plot 12 nkruma rd, kampala, ug</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="d-flex justify-content-center">
                                <Link className="py-3 px-4 nav-link" to="/Bag">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="px-2">Bag</span>
                                </Link>
                                <Link className='py-3 px-4 nav-link' to="/Account">
                                    <i className="far fa-user"></i>
                                    <span className="px-2">Acount</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-start">
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreName
