// import { useEffect} from 'react'
// import PurchaseCart from '../ShoppingCart/PurchaseCart';
// //import axios from 'axios'

// export default function Comprar({ productos, data }){
//  useEffect(()=>{
//   const script = document.createElement('script');
//   const attr_data_preference = document.createAttribute('data-preference-id')
//   //const attr_nonce = document.createAttribute('nonce')

//   attr_data_preference.value = data.id
//   //attr_nonce.value = 'abcdefg'
//   script.src="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1002383064-868427dc-6c4d-40c4-b7e1-cc7070ea8409";
//   script.setAttributeNode(attr_data_preference)
//  // script.setAttributeNode(attr_nonce)
// // console.log("tomi",data)
// // console.log("tomi",script)
//   document.getElementById('form1').appendChild(script)
//   return () =>{
//     document.getElementById('form1').removeChild(script);
//   }
//  },[])
//     return(
//         <div>
//   <form id='form1'>

//         <h4>Listado de Compras</h4>
        
//       <div><PurchaseCart/></div>
        
//       </form>

//      </div>
//     )
// }