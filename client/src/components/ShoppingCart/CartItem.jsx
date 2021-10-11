import * as React from 'react';

import { useDispatch } from 'react-redux';
import { incrementCart, decrementCart, clearCart } from '../../redux/carts/cartsActions';

 export default function CartItem  ({image, price, title, id, quantity}) {
     const dispatch = useDispatch()
 
     function handleIncrement(){
    dispatch(incrementCart())
 } 
 function handleDecrement(){
    dispatch(decrementCart())
 } 
 function handleClearCart(){
    dispatch(clearCart())
 } 
    
return (
<div>
    <h4>{title}</h4>
    <img src={image} alt="imagen no encontrada" width="50px" height="50px" />
    <h5>{price}$ x {quantity}= {price*quantity}$</h5>
   <div><p>Cantidad:</p> 
       <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    </div>
    <button onClick={handleClearCart}>Vaciar Carrito</button>
</div>
)
 }