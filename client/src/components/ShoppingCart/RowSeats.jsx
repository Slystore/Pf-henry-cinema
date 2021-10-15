import React from "react";

// let numSeat = [1,2,3,4,5,6,7,8,9]
let numSeat = [1,2,3,4,5,6,7,8]
let x = 0

function seat( idMap, index ){

    // console.log(idMap + " x:" + x )
    if( index === 2 || index === 5) return
    
    let but = document.querySelector('#'+`${idMap}`) 

    if(x === 0 && but.style.color === 'rgb(49, 102, 202)' ){
        but.style.color = 'black'
        x = 1
       
    } else if(x === 1 && but.style.color === 'black' ) {
        but.style.color = 'rgb(49, 102, 202)'
        x = 0
    } else if( x === 0 && but.style.color === 'black'){
        but.style.color = 'rgb(49, 102, 202)'
        x = 0
    } else {
        but.style.color = 'black'
        x = 1
    }
    // console.log(idMap + " x:" + x )
}

function RowSeats({Letter}) {

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