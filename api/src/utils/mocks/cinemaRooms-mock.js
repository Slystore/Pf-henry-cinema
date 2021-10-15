const { cinemaRoom } = require("../../db.js");

const cinemaRoomMockUp = async() => {
    try {
        await cinemaRoom.create({
            name: "sala_uno",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_dos",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_tres",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_cuatro",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_cinco",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_seis",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_siete",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_ocho",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_nueve",
            seatCount: 50
        });
        await cinemaRoom.create({
            name: "sala_diez",
            seatCount: 50
        })
    } catch (err) {
        console.log({
            error: "Can't Fetch CinemaRooms",
            originalError: err,
        });
    }
}

module.exports = { cinemaRoomMockUp }