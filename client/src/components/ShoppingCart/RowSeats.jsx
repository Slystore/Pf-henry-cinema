import React, { useState } from "react";

let numSeat = [1,2,3,4,5,6,7,8,9]

function RowSeats({Letter}) {

    const [color,setColor] = React.useState(0)

    function seat(num){
        // setColor(1)
        // console.log(Letter+num)
        var span = document.querySelector('#seat')
        var data = span.dataset
        alert(data.color);
        data.color ='black'
        alert(data.color);
        console.log(Letter+num+data.color)
    }

    function changeColorSeat(e){
    }

    return (
        <div className="SeatRow">
            <div className="Seat RowLetter">{Letter}</div>
            {
                numSeat.map((s,index) =>{
                    return(
                        //  <div className="Seat"  key={index}><span className={ y===0? "material-icons X": "material-icons X2"} onClick={() => seat(s)}>chair</span></div>
                        // <div className="Seat"  key={index}><span className={ color===0? "material-icons X": "material-icons X2"} onClick={() => seat(s)}>chair</span></div>
                        <div id="seat" className="Seat material-icons" data-color="blue" key={index} onClick={() => seat(s)}>chair</div>
                    )
                })
            }
        </div>
    )
}

export default RowSeats