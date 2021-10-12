import React from 'react'

function RowSeats({Letter}) {
    return (
        <div className="SeatRow">
            <div className="Seat RowLetter">{Letter}</div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
            <div className="Seat"><span class="material-icons X" >chair</span></div>
        </div>
    )
}

export default RowSeats
