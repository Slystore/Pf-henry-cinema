import React from "react";
import { clearSeat, seatSelect } from "../../redux/carts/cartsActions";
import {useDispatch} from 'react-redux'
// let numSeat = [1,2,3,4,5,6,7,8,9]
let numSeat = [1,2,3,4,5,6,7,8]
let x = 0



function RowSeats({Letter}) {
    const dispatch = useDispatch()
    function seat( idMap, index ){

        // console.log(idMap + " x:" + x )
        if( index === 2 || index === 5) return
        
        let but = document.querySelector('#' + idMap); 
    
        if(x === 0 && but.style.color === 'rgb(49, 102, 202)' ){//elige
            but.style.color = 'black'
            x = 1
            dispatch(seatSelect(idMap))
            // console.log("tomi1",idMap, x)
           
        } else if(x === 1 && but.style.color === 'black' ) {//deselige
            but.style.color = 'rgb(49, 102, 202)'
            x = 0
            dispatch(clearSeat(idMap))
            // console.log("tomi2",idMap, x)
        } else if( x === 0 && but.style.color === 'black'){//deselige
            but.style.color = 'rgb(49, 102, 202)'
            x = 0
            dispatch(clearSeat(idMap))
            // console.log("tomi3",idMap, x)
        } else {//elige
            but.style.color = 'black'
            x = 1
            // console.log("tomi4",idMap, x)
            dispatch(seatSelect(idMap))
        }
        // console.log(idMap + " x:" + x )
    }
    return (
        <div className="SeatRow">
            <div className="Seat RowLetter">{Letter}</div>
                {
                    numSeat.map((s,index) =>{
                        let idMap = Letter + (index + 1)
                        return(
                            <div className="Seat" key={index}>
                                {/* <span id={idMap} className="material-icons X" onClick={() => seat(idMap)}>chair</span> */}
                                <span id={idMap} className={ index === 2? "material-icons X3" : index ===5? "material-icons X3" : "material-icons X"} onClick={() => seat(idMap, index)}>chair</span>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default RowSeats