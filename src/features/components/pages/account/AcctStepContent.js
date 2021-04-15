import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../../app/userSlice'




export const getStepsHeader =()=> {
  return [
    (
      <div className='text-start px-3 my-4'>
        <h5 className='fw-bold'>Account</h5>
        <p>To place your order, log in by providing yout 10 digit mobile number.</p>
      </div>
    ), 
    (
      <div className='text-start px-3'>
        <h5 className='fw-bold'>Delivery address</h5>
        <p>Select your delivery address from the existing one, or add new one.</p>
      </div>
    ),
    (
      <div className='text-start px-3'>
        <h5 className='fw-bold'>Payment</h5>
        <p>Select your payment method.</p>
      </div>
    )
  ]
}


const Login = () => {
  const [loginNumber, setLoginNumber] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    loginNumber < 10 && loginNumber > 10 ? setError('number does not match required length') : 
    dispatch(loginUser(loginNumber))
    setLoginNumber('')
  }

  return (
    
    <div className='text-start'>
      <form className='p-3 form-group' onSubmit={handleSubmit}>
          <label htmlFor="mobileNumber" className='fs-6'>mobile Number</label>
          <div className="input-group input-group-lg col-md-4">
            <input type="number" className="form-control p-2 rounded" 
              value={loginNumber} 
              onChange={(e) => setLoginNumber(e.target.value)}
            />
            <button className="btn btn-warning text-primary ms-3 p-2 rounded px-4">Login</button>
          </div>
          <small className="text-danger">{error}</small>
      </form>
    </div>
  )
}


export const getStepContent = (step) => step === 0 ? <Login /> :
step === 1 ? <Address /> : step === 2 ? <Payment /> : <Login />

const Address = () => {
  const loggedUser = useSelector(state => state.users.loggedInUsers)
  return(
    <div className='d-flex' style={{maxWidth: '500px'}}>
      <div className="border text-start me-4 p-3" style={{maxWidth: '200px'}}>
        <h6 className='fw-bold text-capitalize'>{loggedUser.name}</h6>
        <small >{loggedUser.address}</small> <br/>
        <small className=''>{loggedUser.number}</small>
      </div>
      <div className="border mx-auto my-auto p-5"  style={{maxWidth: '200px'}}>
          <span><i className='fa fa-plus'></i> Add New Address</span>
      </div>
    </div>
  )
}

const Payment = () => {
  const [method, setMethod] = useState(false)
  // const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault() 
  }
  return(
    <form className='text-start' onSubmit={onSubmit}>
      <div class="form-check pb-4">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={method} onChange={(e) =>setMethod(e.target.value)} />
        <label class="form-check-label" for="flexRadioDefault1">
          Cash on delivery
        </label>
      </div>
      <button className="btn btn-warning text-primary px-5 py-2">Place Order</button>
    </form>
  )
}