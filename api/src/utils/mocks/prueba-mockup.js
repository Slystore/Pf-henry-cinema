const { movies, genres, cinemas, cinemaRoom, screening } = require('../../db.js');


const pruebaMockup = async() => {
    const freeGuy = await movies.create({
        title: "Free Guy",
        released: "2021-08-11",
        image: "https://i.postimg.cc/RC8YLHhr/free-guy.jpg",
        description: "Un cajero de banco llamado Guy se da cuenta de que es un personaje secundario en un videojuego de mundo abierto llamado Free City que pronto se desconectará.",
        actors: ["Ryan Reynolds", "Jodie Corner", "Lil Rel Howery", "Taika Waititi", "Joe Keery", "Utkarsh Ambudkar"],
        director: "Shawn Levy",
        rating: 7.9,
        votes: 1312,
        usersRating: 1.5,
        availability: true,
        price: '99.99',
        runTime: "1.59.45",
    });
    const getFreeGuyGenre = await genres.findAll({
        where: { id: [4, 1, 2, 15] },
        attributes: ['id']
    });

    const getFreeGuyCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getFreeGuyCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_uno' },
        attributes: ['id']
    });

    const getFreeGuyScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    freeGuy.addGenres(getFreeGuyGenre);
    freeGuy.addGenres(getFreeGuyCinema);
    freeGuy.addGenres(getFreeGuyCinemaRoom);
    freeGuy.addGenres(getFreeGuyScreening);

    /*-----------------------------------------------------------------------------------------------*/
};


module.exports = {
    pruebaMockup,
};