
// import { useEffect, useState } from 'react'
// import CheckoutPage from './CheckoutPage'
// import axios from 'axios'

// function PrevCheckout() {
//   const [datos, setDatos] = useState("")

//   useEffect(()=>{
//     axios
//     .get("http://localhost:3001/api/mercadoPagos")
//     .then((data)=>{
//       setDatos(data.data)
//       console.log('Contenido de data:', data)
//     }).catch(err => console.error(err)) 
//   },[])


//   const productos = [
//     {title: "Producto 1", quantity: 5, price: 10.52},
//     {title: "Producto 2", quantity: 15, price: 100.52},
//     {title: "Producto 3", quantity: 6, price: 200}
//   ]
//   return (
//     <div >
//       { !datos
//         ? <p>Aguarde un momento....</p> 
//         : <CheckoutPage productos={productos} data={datos}/>
//       }
//     </div>
//   );
// }

// export default  PrevCheckout;