const { cinemaRoom } = require("../../db.js");
const cinemaRoomMockUp = async() => {
    const salas = [
        "uno",
        "dos",
        "tres",
    ];
    try {
        for (const s of salas) {
            for (let i = 1; i < 4; i++) {
                await cinemaRoom.create({
                    name: `Sala ${s}`,
                    seatCount: 54,
                    cinemaId: i,
                });
            }
        }
    } catch (err) {
        console.log({
            error: "Can't Fetch CinemaRooms",
            originalError: err,
        });
    }
};
module.exports = { cinemaRoomMockUp };