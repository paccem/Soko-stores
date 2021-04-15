import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBag, addQuantity, reduceQuantity, emptyBag } from '../../../app/ProductSlice'
import { Link } from 'react-router-dom'

const Bags = () => {
    const bag = useSelector(state => state.products.Bag)
    const total = useSelector(state => state.products.Total)
    const dispatch = useDispatch()
    

    return (
        <div className='col-sm-3 border-start'>
            <div className="container pt-5 text-start h-50">
                <h5 ClassName=''>Bag <span className='badge bg-primary'>{bag.length ? bag.length : '0'}</span></h5>
                <div className="mt-3 container text-start overflow-auto h-75">
                    <div className='mt-5'>
                        {
                            bag.length ?
                            bag.map(item => {
                                return (
                                    <div className='container my-4 border p-4 text-start'>
                                        <h6>{item.name}</h6>
                                        <p>item Price: ${item.price}</p>
                                        {/* <small>{item.category}</small> */}
                                        <div className="d-flex justify-content-between">
                                            <div className="">
                                                <button className="btn btn-primary btn-sm" onClick={() => dispatch(reduceQuantity(item.id))}>
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                                <span className='px-2 fs-5'>{item.quantity}</span>
                                                <button className="btn btn-primary btn-sm" onClick={() => dispatch(addQuantity(item.id))}>
                                                    <i class="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <div className="pt-1">
                                                <button className="btn btn-danger btn-sm" onClick={()=> dispatch(removeFromBag(item.id))}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            }) :
                            <div className="jumbotron text-center">
                                <i class="far fa-meh fa-4x"></i>
                                <h4 className="pt-3">Bag is Empty</h4>
                            </div>
                            
                        }
                    </div>
                </div>
                <div className="my-5">
                    <h5>Bag Total: ${total}</h5>
                    <div className="d-flex">
                        <Link to="/Bag" className="btn btn-primary me-2">Check Out</Link>
                        <button className="btn btn-danger" onClick={() => dispatch(emptyBag())}>Empty Bag</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bags
