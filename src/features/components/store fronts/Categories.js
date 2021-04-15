import React from 'react'
import { useSelector } from 'react-redux'
// import {filterByCategory } from '../../../app/ProductSlice'

const Categories = () => {
    const products = useSelector(state => state.products.ProductList)
    const electronic =  products.map(product => product.category === 'kids' ? product : '')
    return (
        <div className="col-sm-3 border-end">
            <div className="container">
                <ul className="flex-column text-start">
                    <div className="nav-link" aria-current="page">Home</div>
                   
                    <div className="nav-link" style={{cursor: 'pointer'}}>
                        Electronics ({electronic.length})
                    </div>
                    
                    <div className="nav-link">Face Masks ()</div>
                    
                    <div className="nav-link">Fresh Food ()</div>
                    
                    <div className="nav-link">Grocery ()</div>
                    
                    <div className="nav-link">Kids ()</div>
                
                    <div className='fw-bold nav-link text-primary' >View all categories <i className="fa fa-chevron-right"></i></div>
                </ul>
            </div>
        </div>
    )
}

export default Categories
