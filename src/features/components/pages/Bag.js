import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBag, addQuantity, reduceQuantity, emptyBag } from '../../../app/ProductSlice'
import { Link } from 'react-router-dom'

const Bag = () => {
    const bag = useSelector(state => state.products.Bag)
    const total = useSelector(state => state.products.Total)
    const dispatch = useDispatch()
    

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="mt-5">
                    <div className='row'>
                        {
                            bag.length ?
                            bag.map(item => {
                                return (
                                    <div className='col-xs-6 col-md-4'>
                                    <div className="card mb-3" style={{maxWidth:'350px'}}>
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                            <div class="col-md-8 text-start">
                                                <div class="card-body">
                                                    <p class="card-title">Item Name: <span className='fw-bold text-capitalize'>{item.name}</span></p>
                                                    <p class="card-text">Item Price: {item.price}</p>
                                                </div>
                                                <div className="d-flex justify-content-between py-3">
                                                    <div className="ms-3">
                                                        <button className="btn btn-primary btn-sm" onClick={() => dispatch(reduceQuantity(item.id))}>
                                                            <i class="fas fa-minus"></i>
                                                        </button>
                                                        <span className='px-2 fs-5'>{item.quantity}</span>
                                                        <button className="btn btn-primary btn-sm" onClick={() => dispatch(addQuantity(item.id))}>
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div className="me-4 pt-1">
                                                        <button className="btn btn-danger btn-sm" onClick={()=> dispatch(removeFromBag(item.id))}>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    
                                )
                            }) 
                            :
                            <EmptyBagFront />
                        }
                    </div>
                </div>
                {bag.length ? 
                (<div className="my-5 text-sm-start">
                    <h5>Bag Total: ${total}</h5>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to="/" className="btn btn-primary me-2">Store</Link>
                            <button className="btn btn-danger" onClick={() => dispatch(emptyBag())}>Empty Bag</button>
                        </div>
                        <div>
                            <Link to='/Account' className='btn btn-outline-primary'>Proceed to Payment</Link>
                        </div>
                    </div>
                </div>)
                : 
                ""
                }
            </div>
        </div>
    )
}

export default Bag


const EmptyBagFront = () => {
    return (
        <div className="d-flex justify-content-sm-center align-item-center py-5">
            <div className="my-auto py-5 mx-auto">
                <i class="far fa-meh fa-5x"></i>
                <h5 className="pt-3">Bag is Empty</h5>
                <p className='text-secondary'>Start shopping to add items to your bag</p>

                <Link to='/' className='btn btn-warning my-4 text-primary fw-bold px-5 py-2'>Back to Home Page</Link>
            </div>
        </div>
    )
}

