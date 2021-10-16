// import { useState } from "react";

// export function localStore(items, action) {

//     let getCart= JSON.parse(window.localStorage.getItem("cart"))
//     if(getCart===null){
//         getCart={}
//     }
//     if(action==='add'){
//         if(getCart[`a${items._id}`]){
//             getCart[`a${items._id}`].count+=1
//         }else{
//             getCart[`a${items._id}`]={...items,id:items._id, count:1}
            
//         } 
//     }else if(action==='subtract'){
        
//         getCart[`a${items}`].count-1===0 ? delete getCart[`a${items}`] : getCart[`a${items}`].count-=1
//     }else if(action==='delete'){
        
//         delete getCart[`a${items}`]
//     }else if(action==='clear'){
//         getCart={}
//     } 
//     window.localStorage.setItem("cart",JSON.stringify(getCart))
//     return getCart
// }; 

// export function payloadJWT(){
//     const token=window.localStorage.getItem('token')
  
//     if(token) {
//       let renovar= token.split('.')[1]
//       renovar=window.atob(renovar)
//       renovar=JSON.parse(renovar)  
//       return renovar
//     }
//   }    
//   export function useLocalStorage(key, initialValue){
//       const [storedValue, setStoredValue]= useState(() => {
//           try{
//              const item= window.localStorage.getItem(key);
//               return item? JSON.parse(item): initialValue
//           }catch(err){return initialValue}
//         })
//       const setValue = value => {
//           try {setStoredValue(value)
//         window.localStorage.setItem(key, JSON.stringify(value))}
//         catch(err){
//             console.log(err)
//         }
//       }
//       return [setValue, storedValue];
//   }

//   export function addProductCart(id) {
//     let data = [];
//     let date = JSON.parse(localStorage.getItem("data"));

//     if (date) {
//         date.push( id );
//         localStorage.setItem("data", JSON.stringify(date));
//     } else {
//         data.push(id );
//         localStorage.setItem("data", JSON.stringify(data));
//     }
// }

// export function removeProductCart(id) {
//     let data = JSON.parse(localStorage.getItem("data"));
//     data = data.filter((e) => e.id !== id);
//     localStorage.removeItem("data");
//     localStorage.setItem("data", JSON.stringify(data));
// }
// import jwt from "jsonwebtoken";

// export default function Verify () {
//     try{
//         return JSON.parse(localStorage.getItem("token"))
//         ? jwt.verify(
//               JSON.parse(localStorage.getItem("token")),
//               process.env.REACT_APP_SECRET_KEY
//           )
//         : null;
//     }catch(e){
//         console.log(e.message);
//         return {logout:true};
//     }
// }