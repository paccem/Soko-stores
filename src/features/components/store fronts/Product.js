import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBag } from '../../../app/ProductSlice'

const Product = ({product}) => {
    const dispatch = useDispatch()


    return (
        <div className="card mb-4 shadow" style={{height: '100px'}}>
            <div className="row">
                <div className="col-sm-4 text-start">
                    <img src={product.src} alt={product.name} className="" style={{height: '100px', width: '150px'}} />
                </div>
                <div className="col-sm-8 text-start">
                    <div className="d-flex justify-content-between">
                        <div className='my-auto p-2'>
                            <h6 className='text-capitalize'>{product.name}</h6>
                            <p>${product.price}</p>
                        </div>
                        <div className='my-auto p-4'>
                            <button className='btn btn-outline-primary' onClick={() => dispatch(addToBag(product.id))}>Add to Bag</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>  
    )
}

export default Product;
