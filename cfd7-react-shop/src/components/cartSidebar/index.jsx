import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../core'
import { CHANGE_NUM_BY_KEY, DECREASE_NUM, INCREASE_NUM } from '../../store/type'


function CartSidebar() {

  const { listProduct } = useSelector(store => store.cart)

  // const [num, setNum] = useState(0)
  // let { form, error, handleSubmit, register } = useForm()
  // let numCart = useRef();

  
  console.log(`listProduct`, listProduct)

  let total = 0

  function a() {
    listProduct.forEach(e => {
      total = total + e.price * e.num
    });
  }
  a()
  const formatMoney = (money) => {
    return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }

  // const handleChange =(e)=>{
  //   numCart.current.value= e.target.value
  // }

  //  
  return (
    <div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-vertical" role="document">
        {/* Full cart (add `.d-none` to disable it) */}
        <div className="modal-content">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart ( {listProduct.length} )</strong>
          </div>
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush">
            {
              listProduct?.map((o, i) => (
                <CartItem 
                  data ={o}
                  key={i}
                />
              ))
            }
          </ul>
          {/* Footer */}
          <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>Subtotal</strong> <strong className="ml-auto"> {formatMoney(total)} </strong>
          </div>
          {/* Buttons */}
          <div className="modal-body">
            <a className="btn btn-block btn-dark" href="./checkout.html">Continue to Checkout</a>
            <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">View Cart</a>
          </div>
        </div>
        {/* Empty cart (remove `.d-none` to enable it) */}
        <div className="modal-content d-none">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart (0)</strong>
          </div>
          {/* Body */}
          <div className="modal-body flex-grow-0 my-auto">
            {/* Heading */}
            <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
            {/* Button */}
            <a className="btn btn-block btn-outline-dark" href="#!">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar


export const CartItem = ({data}) => {
  const dispatch = useDispatch()
  let inputRef = useRef()
  const formatMoney = (money) => {
    return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.value = data.num
    }
  },[data.num])

  const handleKeyPress =(ev,data)=>{
    if(ev.which ===13){
      
      dispatch({type:CHANGE_NUM_BY_KEY,payload:{data,num:ev.currentTarget.value}})
    }
  }

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="./product.html">
            <img className="img-fluid" src={data.thumbnail_url} alt="..." />
          </a>
        </div>
        <div className="col-8">
          {/* Title */}
          <p className="font-size-sm font-weight-bold mb-6">
            <a className="text-body" href="./product.html"> {data.name} </a> <br />
            <span className="text-muted"> {formatMoney(data.price)} </span>
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            {/* <select className="custom-select custom-select-xxs w-auto" defaultValue ={o.num} onChange={(ev)=>{handleChange(ev)}}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select> */}
            <button className="btn-change" onClick={() => dispatch({ type: DECREASE_NUM, payload: data })}>-</button>
            <input type="number" className='custom-input'  min={0} ref={inputRef} onKeyPress={(ev)=>{handleKeyPress(ev,data)}} />
            <button className="btn-change" onClick={() => dispatch({ type: INCREASE_NUM, payload: data })} >+</button>

            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!">
              <i className="fe fe-x" /> Remove
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}