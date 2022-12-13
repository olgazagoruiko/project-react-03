import React from "react";

function Cart(props) {
  return (
    <>
      <tr>
        <td>
          <img className='img-cart' src={props.image} alt={props.title} />
          <br />
          {props.title}</td>
        <td>{props.price}</td>
        <td>
          <button type='text'className='btn-cart btn-minus' data-key={props.articul}>-</button>
          {props.quantity}
          <button type='text'className='btn-cart btn-plus' data-key={props.articul}>+</button>
        </td>
        <td>{props.price*props.quantity}</td>
        <td>
          <button type='text' className='btn-cart btn-del'  data-key={props.articul}>x</button>
        </td>
      </tr>  
    </>
  )
}
export default Cart;