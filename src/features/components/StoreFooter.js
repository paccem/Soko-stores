import React from 'react'

const StoreFooter = () => {
    return (
        <div className='container-fluid sticky-bottom'>
            <div className="container-fluid bg-primary">
                <div className="container w-50 mx-auto">
                    <div className="d-flex justify-content-around py-sm-5 py-3">
                        <div className=""><i className="fa fa-shipping-fast fa-3x text-warning"></i> <p className="pt-2 text-capitalize text-white">fast delivery</p></div>
                        <div className=""><i className="fal fa-award fa-3x text-warning"></i> <p className="pt-2 text-capitalize text-white">buyer protection</p></div>
                        <div className=""><i className="fa fa-history fa-3x text-warning"></i> <p className="pt-2 text-capitalize text-white">customer support</p></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="text-center py-5">
                    <h6 className='fw-light text-uppercase'>store details</h6>
                    <div className="py-2">
                        <h5 className='text-capitalize'>target</h5>
                        <p className='text-capitalize fs-6'>Cham Tower, plot 12 nkruma rd, kampala, ug</p>
                    </div>
                    <button className="btn btn-success"> <i className="fab fa-whatsapp px-1"></i> Chat with us</button>
                </div>
            </div>
        </div>
    )
}

export default StoreFooter
