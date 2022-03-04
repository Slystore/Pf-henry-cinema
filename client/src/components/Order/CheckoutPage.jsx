import { useEffect} from 'react'
import PurchaseCart from '../ShoppingCart/PurchaseCart';
//import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Comprar({ productos, data }){
 useEffect(()=>{
  const script = document.createElement('script');
  const attr_data_preference = document.createAttribute('data-preference-id')
  //const attr_nonce = document.createAttribute('nonce')

  attr_data_preference.value = data.id
  //attr_nonce.value = 'abcdefg'
  script.src="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1002383064-39bd1646-54c4-4b3a-97de-e7ec74753049";
  script.setAttributeNode(attr_data_preference)
 // script.setAttributeNode(attr_nonce)
console.log("tomi",data)
console.log("tomi",script)
  document.getElementById('form1').appendChild(script)
  return () =>{
    document.getElementById('form1').removeChild(script);
  }
 },[data])
 const {cinemaSelect} = useSelector(state => state.cartReducer) 
 const {screeningSelect} = useSelector(state => state.cartReducer) 
 const {postCartStorage} = useSelector(state => state.cartReducer) 
 const {storage} = useSelector(state => state.cartReducer)
    return(
        <div>
  <form id='form1'>

        <h4>Listado de Compras</h4>
            {storage && <div>
            <h4>Película: {storage[0].title}</h4>
            <h5>Total: {(storage[0].price)*(storage[0].quantity)}$</h5>
            <p>Sucursal: {cinemaSelect}</p>
            <p>Horario: {screeningSelect}</p>
             <p>Asientos: {postCartStorage && postCartStorage.map(seat => seat.seat)}</p>  
            </div>
            }
      
            </form>

     </div>
    )
}