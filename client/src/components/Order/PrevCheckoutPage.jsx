import { useEffect, useState } from 'react'
import CheckoutPage from './CheckoutPage'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function PrevCheckout() {
  const [datos, setDatos] = useState("")
const history= useHistory()

  useEffect(()=>{
    axios
    .get("http://localhost:3001/api/mercadoPagos")
    .then((data)=>{
      setDatos(data.data)
      console.log('Contenido de data:', data)
      console.log('wanda datos:', datos)
    }).catch(err => console.error(err)) 
  },[])
  useEffect(()=>{
    
    const script = document.createElement('script');
    const attr_data_preference = document.createAttribute('data-preference-id')
    //const attr_nonce = document.createAttribute('nonce')
  
    attr_data_preference.value = datos.id
    //attr_nonce.value = 'abcdefg'
    
    script.setAttributeNode(attr_data_preference)
    // script.src="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1002383064-39bd1646-54c4-4b3a-97de-e7ec74753049";
    script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
   // script.setAttributeNode(attr_nonce)
  console.log("tomi",datos)
  console.log("tomi",script)
  if(datos){
    document.getElementById('form1').appendChild(script)
    // return () =>{
    //   document.getElementById('form1').removeChild(script);
    // }
}
   },[datos])
// function redirect(){
//     history.push('/checkoutPage')
// }
const {cinemaSelect} = useSelector(state => state.cartReducer) 
        const {screeningSelect} = useSelector(state => state.cartReducer) 
        const {postCartStorage} = useSelector(state => state.cartReducer) 
        const {storage} = useSelector(state => state.cartReducer)
 
  return (
    <div >
      { !datos
        ? <p>Aguarde un momento....</p> 
        :      <div>
         <form id='form1'>
       
               <h4>Listado de Compras</h4>
                   {storage && <div>
                   <h4>Película: {storage.length>0?storage[0].title: undefined}</h4>
                   <h5>Total: {(storage.length>0?storage[0].price: undefined)*(storage.length>0?storage[0].quantity:undefined)}$</h5>
                   <p>Sucursal: {cinemaSelect}</p>
                   <p>Horario: {screeningSelect}</p>
                    <p>Asientos: {postCartStorage && postCartStorage.map(seat => seat.seat)}</p>  
                   </div>
                   }
             
                   </form>
       
            </div>
        
      }
    </div>
  );
}

export default  PrevCheckout;