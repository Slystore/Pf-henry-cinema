import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { seatSelect } from '../../redux/carts/cartsActions';
import RowSeats from './RowSeats'

 export default function Select  () {
 
  const {seats} = useSelector(state => state.cartReducer) 
  const {cart} = useSelector(state => state.cartReducer) 
  const dispatch = useDispatch()

  function handleCheck(e) {

    if (e.target.checked) {
      dispatch(seatSelect(e.target.value));
    }else{e.target.checked = false

    e.target.value = null}
  }

  return (
    <div className="CartSeatContainer">
      
      <div>{ cart[0]? '':alert("Carrito vacio")}</div>

      <div className="SeatMap">

        <div className="Cinema">
          <RowSeats Letter ='A' />
          <RowSeats Letter ='B' />
          <RowSeats Letter ='C' />
          <RowSeats Letter ='D' />
          <RowSeats Letter ='F' />
          <RowSeats Letter ='G' />
          <RowSeats Letter ='H' />
          <RowSeats Letter ='I' />
          <RowSeats Letter ='J' />
        </div>

        <div className="Intructions">
          <div><h1>Escoge tus asientos</h1></div>
          <div>
            <div className="Seat"><span className="material-icons X" >chair</span></div>
            <div className="TypeSeat">Libre</div>
            <div className="Seat"><span className="material-icons X2" >chair</span></div>
            <div className="TypeSeat">Ocupada</div>
            <div className="Seat"><span className="material-icons X3" >chair</span></div>
            <div className="TypeSeat">No Disponible</div>
          </div>
        </div>

      </div>


          
            {/* <div > <label >Asiento: </label>
              {seats ? seats.map(seat => {
                return (<label id='aca'><input type="checkbox" name={seat.nunmber} value={seat.number} onChange={handleCheck} />
                  {seat.number}{seat.row}</label>)
              }) : "Error en Asientos"}
            </div> */}
    </div>
  )
}



//  const {cinemas} = useSelector(state => state.cartReducer) 
//     const {screening} = useSelector(state => state.cartReducer) 
//     const {seats} = useSelector(state => state.cartReducer) 
//     const {cart} = useSelector(state => state.cartReducer) 
//   const dispatch = useDispatch()

//     function handleCinema(e) {
//         e.preventDefault();
//         dispatch(cinemaSelect(e.target.value));
//       }
//       function handleScreening(e) {
//         e.preventDefault();
//         dispatch(screeningSelect(e.target.value));
//       }
//       function handleCheck(e) {
  
//         if (e.target.checked  ) {
//          dispatch(seatSelect(e.target.value));

//        }else{e.target.checked = false
//        e.target.value = null}
       
//          }
// return (
// <div>
//     <div>{cart[0]?cart[0].title:alert("Carrito vacio")}</div>
// <div className="ContainerSelect">
//           <select className="Select" onChange={(e) => handleCinema(e)}>
//             <option value="All">Cinemas</option>
//             {cinemas &&
//               cinemas.map((cinema, index) => {
//                 return (
//                   <option key={index} value={cinema.id}>
//                     {cinema.name}
//                   </option>
//                 );
//               })}
//           </select>
//         </div>
//         <div className="ContainerSelect">
//           <select className="Select" onChange={(e) => handleScreening(e)}>
//             <option value="All">Funciones</option>
//             {screening &&
//               screening.map((screen, index) => {
//                 return (
//                   <option key={index} value={screen.id}>
//                     {screen.time}
//                   </option>
//                 );
//               })}
//           </select>
//         </div>
//         <div > <label >Asiento: </label>
//           {seats ? seats.map(seat => {
//             return (<label id='aca'><input type="checkbox" name={seat.nunmber} value={seat.number} onChange={handleCheck} />
//               {seat.number}{seat.row}</label>)
//           }) : "Error en Asientos"}
//         </div>
// </div>