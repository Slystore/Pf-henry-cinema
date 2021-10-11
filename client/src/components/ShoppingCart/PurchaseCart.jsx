import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cinemaSelect, screeningSelect, seatSelect } from '../../redux/carts/cartsActions';

 export default function PurchaseCart  () {
    const {cinemaSelect} = useSelector(state => state.cartReducer) 
    const {screeningSelect} = useSelector(state => state.cartReducer) 
    const {seatsSelect} = useSelector(state => state.cartReducer) 
    const {cart} = useSelector(state => state.cartReducer) 
return (
<div>
    {cart[0]? (<div>
    <h4>Película: {cart[0].title}</h4>
    <h5>Total: {(cart[0].price)*(cart[0].quantity)}$</h5>
    <p>Sucursal: {cinemaSelect}</p>
    <p>Horario: {screeningSelect}</p>
    <p>Asientos: {seatsSelect && seatsSelect.map(seat => seat)}</p> </div>)
    :alert("Debe completar el paso anterior")}
</div>
)
 }