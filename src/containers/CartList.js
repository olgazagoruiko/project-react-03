import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import {
  selectGoods
} from '../store/goodsSlice';
import {
  selectCart
} from '../store/cartSlice';

import Cart from "../components/Cart";
import { minus, increment, remove } from "../store/cartSlice";

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  console.log('cart',cart)
  const dispatch = useDispatch();
  //Переіндeксація масиву
  const goodsObj = goods.reduce((accum, item) => {
    accum[item['articul']] = item;
    return accum;
  }, {});
  console.log('Переіндексований масив', goodsObj);

  const clickHandler = (event) => {
    let elemBtn = event.target;
    if (!elemBtn.classList.contains('btn-cart')) {
      return true
    };

    if (elemBtn.classList.contains('btn-minus')) {
      dispatch(minus(elemBtn.getAttribute('data-key'))); 
    };
    if (elemBtn.classList.contains('btn-plus')){
      dispatch(increment(elemBtn.getAttribute('data-key')));
    };
    if (elemBtn.classList.contains('btn-del')){
      dispatch(remove(elemBtn.getAttribute('data-key')));
    };  
  }

  let total = 0;
  let articalsArr = Object.keys(cart);
  // console.log('Array keys', articalsArr);
  for (let key of articalsArr) {
    total += cart[key]*goodsObj[key]['cost'];   
  }
    
  return (
    <div>
      <table >
        <caption className='caption-table'>Basket</caption>
        <thead className="head-table">
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='body-table' onClick={clickHandler}>  
          {Object.keys(cart).map(item =>
              <Cart
                key={item + goodsObj[item]['title']}
                title={goodsObj[item]['title']}
                image={goodsObj[item]['image']}
                price={goodsObj[item]['cost']}
                quantity={cart[item]}
                articul={item} />
            )} 
        </tbody>
        <tfoot className="foot-table">
          <tr>
            <td colSpan='3'>Total:</td>
            <td colSpan='2'>{total}</td>
          </tr>
        </tfoot>            
      </table>
    
          {/* // Object.keys(cart).map(item => 
          //   <li key={item + goodsObj[item]['title']}>
          //     {goodsObj[item]['title']}-{cart[item]}
          //   </li> */}
              
   </div>
  )
}
export default CartList;

