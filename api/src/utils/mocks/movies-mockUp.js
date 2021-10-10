const { movies, genres, cinemas, cinemaRoom, screening } = require('../../db.js');

const moviesList = async() => {
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
    freeGuy.addCinemas(getFreeGuyCinema);
    freeGuy.addCinemaRooms(getFreeGuyCinemaRoom);
    freeGuy.addScreenings(getFreeGuyScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const snakeEyes = await movies.create({
        title: "Snake Eyes: G.I. Joe Origins",
        released: "2021-07-22",
        image: "https://i.postimg.cc/hGLnH0J7/snake-eye-gi-joe-origins.jpg",
        description: "Después de salvar la vida de su heredero aparente, el tenaz y solitario Snake Eyes es bienvenido en un antiguo clan japonés llamado Arashikage, donde se le enseña los caminos del guerrero ninja. Pero, cuando se revelen los secretos de su pasado, se pondrá a prueba el honor y la lealtad de Snake Eyes, incluso si eso significa perder la confianza de los más cercanos a él.",
        actors: ["Henry Golding", "Andrew Koji", "Iko Uwuais", "Ursula Corbero", "Samara Weaving", "Peter Mensah"],
        director: "Robert Schwentke",
        rating: 7.9,
        votes: 1312,
        usersRating: 2.2,
        availability: true,
        price: '99.99',
        runTime: "2.35.15",
    });
    const getSnakeEyesGenre = await genres.findAll({
        where: { id: [4, 1, 2, 15] },
        attributes: ['id']
    });

    const getSnakeEyesCinema = await cinemas.findOne({
        where: { name: 'Leta' },
        attributes: ['id']
    });

    const getSnakeEyesCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_dos' },
        attributes: ['id']
    });

    const getSnakeEyesScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    snakeEyes.addGenres(getSnakeEyesGenre);
    snakeEyes.addCinemas(getSnakeEyesCinema);
    snakeEyes.addCinemaRooms(getSnakeEyesCinemaRoom);
    snakeEyes.addScreenings(getSnakeEyesScreening);
    /*-----------------------------------------------------------------------------------------------*/

    const old = await movies.create({
        title: "Old",
        released: "2021-07-21",
        image: "https://i.postimg.cc/9FDhW2R2/old.jpg",
        description: "Un grupo de familias en unas vacaciones tropicales descubren que la playa apartada donde se hospedan de alguna manera los hace envejecer rápidamente, reduciendo sus vidas enteras a un solo día.",
        actors: ["Gael Garcia Bernal", "Vicky Krieps", "Rufus Sewel"],
        director: "	M. Night Shyamalan",
        rating: 6.7,
        votes: 964,
        usersRating: 4.5,
        availability: true,
        price: '99.99',
        runTime: "2.39.30",
    });

    const getOldGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getOldCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getOldCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_tres' },
        attributes: ['id']
    });

    const getOldScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    old.addGenres(getOldGenre);
    old.addCinemas(getOldCinema);
    old.addCinemaRooms(getOldCinemaRoom);
    old.addScreenings(getOldScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const shangChi = await movies.create({
        title: "Shang-Chi and the Legend of the Ten Rings",
        released: "2021-09-01",
        image: "https://i.postimg.cc/d0PvHf0Y/shang-chi.jpg",
        description: "Shang-Chi debe enfrentarse al pasado que pensó que había dejado atrás cuando se ve atraído por la red de la misteriosa organización de los Diez Anillos.",
        actors: ["Simu Liu", "Awkwafina", "Toni Leung", "Fala Chen"],
        director: "Destin Daniel Cretton",
        rating: 7.8,
        votes: 1092,
        usersRating: 5.5,
        availability: true,
        price: '99.99',
        runTime: "2.59.30",
    });
    const getShangChiGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getShangChiCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getShangChiCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_cuatro' },
        attributes: ['id']
    });

    const getShangChiScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    shangChi.addGenres(getShangChiGenre);
    shangChi.addCinemas(getShangChiCinema);
    shangChi.addCinemaRooms(getShangChiCinemaRoom);
    shangChi.addScreenings(getShangChiScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const theSuicideSquad = await movies.create({
        title: "The Suicide Squad",
        released: "2021-07-28",
        image: "https://i.postimg.cc/m2KGknCH/the-suicide-squad.jpg",
        description: "Los supervillanos Harley Quinn, Bloodsport, Peacemaker y una colección de estafadores locos en la prisión de Belle Reve se unen al súper secreto y sombrío Task Force X cuando los dejan en la remota isla de Corto Maltese, infundida de enemigos.",
        actors: ["Margot Robbie", "Idris Elba", "John Cena", "Joel Kinnaman"],
        director: "James Gunn",
        rating: 7.9,
        votes: 4138,
        usersRating: 5.5,
        availability: true,
        price: '99.99',
        runTime: "2.43.20",
    });
    const getTheSuicideSquadGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getTheSuicideSquadCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getTheSuicideSquadCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_cinco' },
        attributes: ['id']
    });

    const getTheSuicideSquadScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    theSuicideSquad.addGenres(getTheSuicideSquadGenre);
    theSuicideSquad.addCinemas(getTheSuicideSquadCinema);
    theSuicideSquad.addCinemaRooms(getTheSuicideSquadCinemaRoom);
    theSuicideSquad.addScreenings(getTheSuicideSquadScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const catchTheBullet = await movies.create({
        title: "Catch the Bullet",
        released: "2021-09-10",
        image: "https://i.postimg.cc/GtZSLZV3/cath-the-bullet.jpg",
        description: "El mariscal estadounidense Britt MacMasters regresa de una misión para encontrar a su padre herido y a su hijo secuestrado por el forajido Jed Blake. Siguiendo su rastro, Britt forma una pandilla con un diputado pistolero y un rastreador estoico de Pawnee. Pero Jed y Britt se acercan peligrosamente al territorio sioux del Desierto Rojo.",
        actors: ["Jay Pickett", "Peter Sherayko", "Peter Facinelli", "Gattlin Griffith"],
        director: "Michael Feifer",
        rating: 5.9,
        votes: 21,
        usersRating: 3.2,
        availability: true,
        price: '99.99',
        runTime: "2.43.20",
    });
    const getCatchTheBulletGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getCatchTheBulletCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getCatchTheBulletCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_seis' },
        attributes: ['id']
    });

    const getCatchTheBulletScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    catchTheBullet.addGenres(getCatchTheBulletGenre);
    catchTheBullet.addCinemas(getCatchTheBulletCinema);
    catchTheBullet.addCinemaRooms(getCatchTheBulletCinemaRoom);
    catchTheBullet.addScreenings(getCatchTheBulletScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const bacNord = await movies.create({
        title: "BAC Nord",
        released: "2021-08-18",
        image: "https://i.postimg.cc/pr96t201/bac-nord.jpg",
        description: "Una brigada de policía que trabaja en los peligrosos barrios del norte de Marsella, donde el nivel de delincuencia es más alto que en cualquier otro lugar de Francia.",
        actors: ["Francois Civil", "Kenza Fortas", "Adele Exarchopoulos", "Gilles Lellouche"],
        director: "Cédric Jimenez",
        rating: 7.9,
        votes: 317,
        usersRating: 2.2,
        availability: true,
        price: '99.99',
        runTime: "2.0.20",
    });
    const getBacNordGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getBacNordCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getBacNordCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_siete' },
        attributes: ['id']
    });

    const getBacNordScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    bacNord.addGenres(getBacNordGenre);
    bacNord.addCinemas(getBacNordCinema);
    bacNord.addCinemaRooms(getBacNordCinemaRoom);
    bacNord.addScreenings(getBacNordScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const kate = await movies.create({
        title: "Kate",
        released: "2021-09-10",
        image: "https://i.postimg.cc/nLk54SjT/kate.jpg",
        description: "Después de ser envenenada irreversiblemente, un criminal despiadado tiene menos de 24 horas para vengarse de sus enemigos y en el proceso forma un vínculo inesperado con la hija de una de sus víctimas pasadas.",
        actors: ["Mary Elizabeth Winstead", "Miku Martineau", "Woody Harrelson", "Michiel Huisman"],
        director: "Cedric Nicolas-Troyan",
        rating: 6.8,
        votes: 518,
        usersRating: 3.3,
        availability: true,
        price: '99.99',
        runTime: "1.45.10",
    });
    const getKateGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getKateCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getKateCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_ocho' },
        attributes: ['id']
    });

    const getKateScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    kate.addGenres(getKateGenre);
    kate.addCinemas(getKateCinema);
    kate.addCinemaRooms(getKateCinemaRoom);
    kate.addScreenings(getKateScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const sasRedNotice = await movies.create({
        title: "SAS: Red Notice",
        released: "2021-08-11",
        image: "https://i.postimg.cc/0yJPCvPn/sas-red-notice.jpg",
        description: "Un soldado de SAS fuera de servicio, Tom Buckingham, debe frustrar un ataque terrorista en un tren que atraviesa el Túnel del Canal de la Mancha. A medida que la acción se intensifica en el tren, ocurren eventos en los pasillos del poder que pueden marcar la diferencia en cuanto a que Buckingham y los pasajeros civiles salgan vivos del túnel.",
        actors: ["Ruby Rose", "Sam Heughan", "Tom Hopper", "Hannah John-Kamen"],
        director: "Magnus Martens",
        rating: 6,
        votes: 194,
        usersRating: 3.1,
        availability: true,
        price: '99.99',
        runTime: "1.38.10",
    });
    const getSasRedNoticeGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getSasRedNoticeCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getSasRedNoticeCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_nueve' },
        attributes: ['id']
    });

    const getSasRedNoticeScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    kate.addGenres(getSasRedNoticeGenre);
    kate.addCinemas(getSasRedNoticeCinema);
    kate.addCinemaRooms(getSasRedNoticeCinemaRoom);
    kate.addScreenings(getSasRedNoticeScreening);


    /*-----------------------------------------------------------------------------------------------*/
    const jungleCruise = await movies.create({
        title: "Jungle Cruise",
        released: "2021-07-28",
        image: "https://i.postimg.cc/HxvhKJty/jungle-cruise.jpg",
        description: "La Dra. Lily Houghton solicita la ayuda del bromista capitán Frank Wolff para llevarla por el Amazonas en su ruinoso barco. Juntos, buscan un árbol antiguo que tenga el poder de curar, un descubrimiento que cambiará el futuro de la medicina.",
        actors: ["Dwayne Johnson", "Emily Blunt", "Jack Withhall", "Edgar Ramirez"],
        director: "Jaume Collet-Serra",
        rating: 7.8,
        votes: 2749,
        usersRating: 3.1,
        availability: true,
        price: '99.99',
        runTime: "1.43.10",
    });
    const getJungleCruiseGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getJungleCruiseCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getJungleCruiseCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_diez' },
        attributes: ['id']
    });

    const getJungleCruiseScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    jungleCruise.addGenres(getJungleCruiseGenre);
    jungleCruise.addCinemas(getJungleCruiseCinema);
    jungleCruise.addCinemaRooms(getJungleCruiseCinemaRoom);
    jungleCruise.addScreenings(getJungleCruiseScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const jurassicHunt = await movies.create({
        title: "Jurassic Hunt",
        released: "2021-09-01",
        image: "https://i.postimg.cc/Fsd2Mx8s/jurassic-hunt.jpg",
        description: "La aventurera Parker se une a un grupo de cazadores de trofeos masculinos en un parque remoto y salvaje. Su objetivo: masacrar dinosaurios genéticamente recreados por deporte usando rifles, flechas y granadas. Después de que las aves rapaces matan a su guía, el equipo intenta escapar del parque, pero los cazadores rápidamente se convierten en los cazados. Peor aún, el gerente del parque sospecha que Parker es un espía y envía un escuadrón de asalto tras ella. ¡Esta batalla está a punto de volverse primitiva!",
        actors: ["Courtney Loggins", "Tarkan Dospil", "Ruben Pia", "Joston Theney"],
        director: "Hank Braxtan",
        rating: 5,
        votes: 134,
        usersRating: 4.1,
        availability: true,
        price: '99.99',
        runTime: "2.28.10",
    });
    const getJurassicHuntGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getJurassicHuntCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getJurassicHuntCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_uno' },
        attributes: ['id']
    });

    const getJurassicHuntScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    jurassicHunt.addGenres(getJurassicHuntGenre);
    jurassicHunt.addCinemas(getJurassicHuntCinema);
    jurassicHunt.addCinemaRooms(getJurassicHuntCinemaRoom);
    jurassicHunt.addScreenings(getJurassicHuntScreening);


    /*-----------------------------------------------------------------------------------------------*/
    const f9 = await movies.create({
        title: "Fast & Forious 9",
        released: "2021-05-19",
        image: "https://i.postimg.cc/j2FYzg1B/rapidos-y-furiosos-9.jpg",
        description: "Dominic Toretto y su tripulación luchan contra el asesino más hábil y el conductor de alto rendimiento que jamás hayan conocido: su hermano abandonado.",
        actors: ["Vin Diesel", "John Cena", "Jordana Brewster", "Tyrese Gibson"],
        director: "Justin Lin",
        rating: 7.5,
        votes: 3828,
        usersRating: 5,
        availability: true,
        price: '99.99',
        runTime: "2.40.25",
    });
    const getf9Genre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getf9Cinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getf9CinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_dos' },
        attributes: ['id']
    });

    const getf9Screening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    f9.addGenres(getf9Genre);
    f9.addCinemas(getf9Cinema);
    f9.addCinemaRooms(getf9CinemaRoom);
    f9.addScreenings(getf9Screening);


    /*-----------------------------------------------------------------------------------------------*/
    const pawPatrol = await movies.create({
        title: "PAW Patrol: The Movie",
        released: "2021-08-09",
        image: "https://i.postimg.cc/yd1M2C4w/paw-patrol.jpg",
        description: "Ryder y los cachorros son llamados a Adventure City para evitar que el alcalde Humdinger convierta la bulliciosa metrópolis en un estado de caos.",
        actors: ["Ron Pardo", "Lilly Bartlam", "Kallan Holley", "Devan Cohen"],
        director: "Callan Brunker",
        rating: 7.9,
        votes: 494,
        usersRating: 5,
        availability: true,
        price: '99.99',
        runTime: "2.10.10",
    });
    const getPawPatrolGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getPawPatrolCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getPawPatrolCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_tres' },
        attributes: ['id']
    });

    const getPawPatrolScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    pawPatrol.addGenres(getPawPatrolGenre);
    pawPatrol.addCinemas(getPawPatrolCinema);
    pawPatrol.addCinemaRooms(getPawPatrolCinemaRoom);
    pawPatrol.addScreenings(getPawPatrolScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const escapeRoom = await movies.create({
        title: "Escape Room: Tournament of Champions",
        released: "2021-07-01",
        image: "https://i.postimg.cc/JnzFP3j8/escape-romm-2.jpg",
        description: "Seis personas, sin saberlo, se encuentran encerradas en otra serie de salas de escape, descubriendo lentamente lo que tienen en común para sobrevivir a medida que descubren todos los juegos a los que han jugado antes.",
        actors: ["Taylor Rusell", "Isabelle Fuhrman", "Hollan Roden", "Indya Moore"],
        director: "Adam Robitel",
        rating: 7.1,
        votes: 452,
        usersRating: 5,
        availability: true,
        price: '99.99',
        runTime: "2.0.50",
    });
    const getEscapeRoomGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getEscapeRoomCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getEscapeRoomCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_cuatro' },
        attributes: ['id']
    });

    const getEscapeRoomScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    escapeRoom.addGenres(getEscapeRoomGenre);
    escapeRoom.addCinemas(getEscapeRoomCinema);
    escapeRoom.addCinemaRooms(getEscapeRoomCinemaRoom);
    escapeRoom.addScreenings(getEscapeRoomCinemaRoom);
    /*-----------------------------------------------------------------------------------------------*/
    const luca = await movies.create({
        title: "Luca",
        released: "2021-06-17",
        image: "https://i.postimg.cc/K8tCz8m6/luca.jpg",
        description: "Luca y su mejor amigo Alberto viven un verano inolvidable en la Riviera italiana. Pero toda la diversión está amenazada por un secreto profundamente guardado: son monstruos marinos de otro mundo justo debajo de la superficie del agua.",
        actors: ["Giacomo Gianniotti", "Jacob Trembley", "Jack Dylan Grazer", "Emma Berman"],
        director: "Enrico Casarosa",
        rating: 8,
        votes: 4637,
        usersRating: 5,
        availability: true,
        price: '99.99',
        runTime: "2.48.20",
    });
    const getLucaGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getLucaCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getLucaCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_cinco' },
        attributes: ['id']
    });

    const getLucaScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    luca.addGenres(getLucaGenre);
    luca.addCinemas(getLucaCinema);
    luca.addCinemaRooms(getLucaCinemaRoom);
    luca.addScreenings(getLucaScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const theBossBaby = await movies.create({
        title: "The Boss Baby: Family Business",
        released: "2021-07-01",
        image: "https://i.postimg.cc/1RJmmMvG/the-boss-baby-family-business.jpg",
        description: "Los hermanos Templeton, Tim y su hermano pequeño Boss Baby, Ted, se han convertido en adultos y se han alejado el uno del otro. Pero un nuevo bebé jefe con un enfoque de vanguardia y una actitud positiva está a punto de unirlos de nuevo ... e inspirar un nuevo negocio familiar.",
        actors: ["Alac Baldwin", "Lisa Kudrow", "Jimmy Kimmel", "Tom McGrath"],
        director: "Tom McGrath",
        rating: 7.8,
        votes: 1431,
        usersRating: 3,
        availability: true,
        price: '99.99',
        runTime: "2.0.33",
    });
    const getTheBossBabyGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getTheBossBabyCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getTheBossBabyCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_seis' },
        attributes: ['id']
    });

    const getTheBossBabyScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    theBossBaby.addGenres(getTheBossBabyGenre);
    theBossBaby.addCinemas(getTheBossBabyCinema);
    theBossBaby.addCinemaRooms(getTheBossBabyCinemaRoom);
    theBossBaby.addScreenings(getTheBossBabyScreening);

    /*-----------------------------------------------------------------------------------------------*/

    const spaceJam = await movies.create({
        title: "Space Jam: A New Legacy",
        released: "2021-07-08",
        image: "https://i.postimg.cc/Dy028sNt/space-jam.jpg",
        actors: ["LeBron James", "Michael B. Jordan", "Zendaya", "Cassandra Star"],
        director: "Malcolm D. Lee",
        director: "Shawn Levy",
        rating: 7.4,
        votes: 2281,
        usersRating: 3.6,
        availability: true,
        price: '99.99',
        runTime: "2.15.13",
    });
    const getSpaceJamGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getSpaceJamCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getSpaceJamCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_siete' },
        attributes: ['id']
    });

    const getSpaceJamScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    spaceJam.addGenres(getSpaceJamGenre);
    spaceJam.addCinemas(getSpaceJamCinema);
    spaceJam.addCinemaRooms(getSpaceJamCinemaRoom);
    spaceJam.addScreenings(getSpaceJamScreening);

    /*-----------------------------------------------------------------------------------------------*/
    const malignant = await movies.create({
        title: "Malignant",
        released: "2021-09-01",
        image: "https://i.postimg.cc/g2RbZKHB/maligno.jpg",
        actors: ["Anabelle Wallis", "Ingrid Bisu", "Maddie Hasson", "Mckenna Grace"],
        director: "James Wan",
        rating: 7.1,
        votes: 626,
        usersRating: 1.4,
        availability: true,
        price: '99.99',
        runTime: "1.55.13",
    });
    const getMalignantGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getMalignantCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getMalignantCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_ocho' },
        attributes: ['id']
    });

    const getMalignantScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    malignant.addGenres(getMalignantGenre);
    malignant.addCinemas(getMalignantGenre);
    malignant.addCinemaRooms(getMalignantCinemaRoom);
    malignant.addScreenings(getMalignantScreening);

    /*-----------------------------------------------------------------------------------------------*/

    const theTomorrowWar = await movies.create({
        title: "The Tomorrow War",
        released: "2021-07-02",
        image: "https://i.postimg.cc/XqH4s7rH/the-tomorrow-war.jpg",
        description: "Un hombre de familia es reclutado para luchar en una guerra futura donde el destino de la humanidad depende de su capacidad para enfrentarse al pasado. Un hombre de familia es reclutado para luchar en una guerra futura donde el destino de la humanidad depende de su capacidad para enfrentarse al pasado.",
        actors: ["Chris Pratt", "Yvonne Strahovski", "J. K. Simmons", "Betty Gilpin"],
        director: "Chris McKay",
        rating: 8.1,
        votes: 4217,
        usersRating: 4.6,
        availability: true,
        price: '99.99',
        runTime: "1.52.23",
    });
    const getTheTomorrowWarGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getTheTomorrowWarCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getTheTomorrowWarCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_nueve' },
        attributes: ['id']
    });

    const getTheTomorrowWarScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    theTomorrowWar.addGenres(getTheTomorrowWarGenre);
    theTomorrowWar.addCinemas(getTheTomorrowWarCinema);
    theTomorrowWar.addCinemaRooms(getTheTomorrowWarCinemaRoom);
    theTomorrowWar.addScreenings(getTheTomorrowWarScreening);

    /*-----------------------------------------------------------------------------------------------*/

    const dontBreatheTwo = await movies.create({
        title: "Don't Breathe 2",
        released: "2021-08-12",
        image: "https://i.postimg.cc/VNWy7LTq/no-respires-2.jpg",
        description: "La película está protagonizada por Jane Levy, Dylan Minnette, Daniel Zovatto y Stephen Lang, y se centra en tres amigos que quedan atrapados dentro de la casa de un ciego al irrumpir en ella. ... Don't Breathe se estrenó en South by Southwest el 12 de marzo de 2016 y se estrenó en cines el 26 de agosto de 2016 por Screen Gems y Stage 6 Films.",
        actors: ["Stephen Lang", "Jane Levy", "Dylan Minnette", "Daniel Zovatto"],
        director: "Rodo Sayagues",
        rating: 7.7,
        votes: 784,
        usersRating: 2.7,
        availability: true,
        price: '99.99',
        runTime: "2.05.02",
    });

    const getDontBreatheTwoGenre = await genres.findAll({
        where: { id: [13, 17, 11] },
        attributes: ['id']
    })
    const getDontBreatheTwoCinema = await cinemas.findOne({
        where: { name: 'Kaia' },
        attributes: ['id']
    });

    const getDontBreatheTwoCinemaRoom = await cinemaRoom.findOne({
        where: { name: 'sala_diez' },
        attributes: ['id']
    });

    const getDontBreatheTwoScreening = await screening.findOne({
        where: { time: 12 },
        attributes: ['id']
    });

    dontBreatheTwo.addGenres(getDontBreatheTwoGenre);
    dontBreatheTwo.addCinemas(getDontBreatheTwoCinema);
    dontBreatheTwo.addCinemaRooms(getDontBreatheTwoCinemaRoom);
    dontBreatheTwo.addScreenings(getDontBreatheTwoScreening);
};


module.exports = {
    moviesList,
};