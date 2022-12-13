import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectGoods
} from '../store/goodsSlice';
import Goods from '../components/Goods';
import { increment } from "../store/cartSlice";

function GoodList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    event.preventDefault();
    let elemBtn = event.target;
    if (!elemBtn.classList.contains('add-to-card')) return true;
    dispatch(increment(elemBtn.getAttribute('data-key')));    
  }

  return (
    <div>
      <div className='goods-field' onClick={clickHandler}>
        {goods.map(item =>
          <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />
        )}
        
      </div>
    </div>
  )
}
export default GoodList;