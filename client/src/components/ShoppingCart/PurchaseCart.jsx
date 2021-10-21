import * as React from 'react';
import { useSelector,  } from 'react-redux';
// import { cinemaSelect, screeningSelect, seatSelect } from '../../redux/carts/cartsActions';

 export default function PurchaseCart  () {
     
    const {cinemaSelect} = useSelector(state => state.cartReducer) 
    const {screeningSelect} = useSelector(state => state.cartReducer) 
    const {postCartStorage} = useSelector(state => state.cartReducer) 
    const {textFill} = useSelector(state => state.cartReducer) 

    return (
        <div className="CartItemContainer">
            {textFill[0]? (<div>
            <h4>Película: {textFill[0].title}</h4>
            <h5>Total: {(textFill[0].price)*(textFill[0].quantity)}$</h5>
            <p>Sucursal: {cinemaSelect}</p>
            <p>Horario: {screeningSelect}</p>
             <p>Asientos: {postCartStorage && postCartStorage.map(seat => seat.seat)}</p>  
            </div>)
            :alert("Debe completar el paso anterior")}
        </div>
    )
}