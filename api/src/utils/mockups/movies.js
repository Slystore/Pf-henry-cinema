const { movies } = require("../../db");

const moviesMockUp = async() => {
    let allMovies = [];
    try {
        const freeGuy = await movies.create({
            id: 501,
            title: "Free Guy",
            released: "2021-08-11",
            image: "https://es.web.img3.acsta.net/c_310_420/pictures/21/06/14/11/47/2960546.jpg",
            description: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
            rating: 7.9,
            votes: 1312,
            userRating: 1.5,
            availability: true,
            price: 99.99,
            runtime: "1.59.45",
        });
        freeGuy.addGenres(
            [4, 1, 2, 15]
        );

        /*-----------------------------------------------------------------------------------------------*/
        const snakeEyes = await movies.create({
            id: 502,
            title: "Snake Eyes: G.I. Joe Origins",
            released: "2021-07-22",
            image: "",
            description: "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
            rating: 7.9,
            votes: 1312,
            userRating: 2.2,
            availability: true,
            price: 99.99,
            runtime: "2.35.15",
        });
        snakeEyes.addGenres(
            [1, 2]
        );


        const old = await movies.create({
            id: 503,
            title: "Old",
            released: "2021-07-21",
            image: "",
            description: "A group of families on a tropical holiday discover that the secluded beach where they are staying is somehow causing them to age rapidly – reducing their entire lives into a single day.",
            rating: 6.7,
            votes: 964,
            userRating: 4.5,
            availability: true,
            price: 99.99,
            runtime: "2.39.30",
        });
        old.addGenres([13, 17, 11]);

        /*-----------------------------------------------------------------------------------------------*/
        const shangChi = await movies.create({
            id: 504,
            title: "Shang-Chi and the Legend of the Ten Rings",
            released: "2021-09-01",
            image: "",
            description: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
            rating: 7.8,
            votes: 1092,
            userRating: 5.5,
            availability: true,
            price: 99.99,
            runtime: "2.59.30",
        });
        shangChi.addGenres(
            [1, 2, 9]
        );

        /*-----------------------------------------------------------------------------------------------*/
        const theSuicideSquad = await movies.create({
            id: 505,
            title: "The Suicide Squad",
            released: "2021-07-28",
            image: "",
            description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
            rating: 7.9,
            votes: 4138,
            userRating: 5.5,
            availability: true,
            price: 99.99,
            runtime: "2.43.20",
        });
        theSuicideSquad.addGenres(
            [1, 2, 9, 4]
        );

        /*-----------------------------------------------------------------------------------------------*/
        const catchTheBullet = await movies.create({
            id: 506,
            title: "Catch the Bullet",
            released: "2021-09-10",
            image: "",
            description: "U.S. marshal Britt MacMasters returns from a mission to find his father wounded and his son kidnapped by the outlaw Jed Blake. Hot on their trail, Britt forms a posse with a gunslinging deputy and a stoic Pawnee tracker. But Jed and Britt tread dangerously close to the Red Desert’s Sioux territory.",
            rating: 5.9,
            votes: 21,
            userRating: 3.2,
            availability: true,
            price: 99.99,
            runtime: "2.43.20",
        });
        catchTheBullet.addGenres([37, 28]);

        /*-----------------------------------------------------------------------------------------------*/
        const bacNord = await movies.create({
            id: 507,
            title: "BAC Nord",
            released: "2021-08-18",
            image: "",
            description: "A police brigade working in the dangerous northern neighborhoods of Marseille, where the level of crime is higher than anywhere else in France.",
            rating: 7.9,
            votes: 317,
            userRating: 2.2,
            availability: true,
            price: 99.99,
            runtime: "2.0.20",
        });
        bacNord.addGenres([5, 17]);

        /*-----------------------------------------------------------------------------------------------*/
        const kate = await movies.create({
            id: 508,
            title: "Kate",
            released: "2021-09-10",
            image: "",
            description: "After she's irreversibly poisoned, a ruthless criminal operative has less than 24 hours to exact revenge on her enemies and in the process forms an unexpected bond with the daughter of one of her past victims.",
            rating: 6.8,
            votes: 518,
            userRating: 3.3,
            availability: true,
            price: 99.99,
            runtime: "1.45.10",
        });
        kate.addGenres([1, 17]);

        /*-----------------------------------------------------------------------------------------------*/
        const sasRedNotice = await movies.create({
            id: 509,
            title: "SAS: Red Notice",
            released: "2021-08-11",
            image: "",
            description: "An off-duty SAS soldier, Tom Buckingham, must thwart a terror attack on a train running through the Channel Tunnel. As the action escalates on the train, events transpire in the corridors of power that may make the difference as to whether Buckingham and the civilian passengers make it out of the tunnel alive.",
            rating: 6,
            votes: 194,
            userRating: 3.1,
            availability: true,
            price: 99.99,
            runtime: "1.38.10",
        });
        sasRedNotice.addGenres([1, 17])

        /*-----------------------------------------------------------------------------------------------*/
        const jungleCruise = await movies.create({
            id: 510,
            title: "Jungle Cruise",
            released: "2021-07-28",
            image: "",
            description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
            rating: 7.8,
            votes: 2749,
            userRating: 3.1,
            availability: true,
            price: 99.99,
            runtime: "1.43.10",
        });
        jungleCruise.addGenres([2, 9, 4, 1]);

        /*-----------------------------------------------------------------------------------------------*/
        const jurassicHunt = await movies.create({
            id: 511,
            title: "Jurassic Hunt",
            released: "2021-09-01",
            image: "",
            description: "Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!",
            rating: 5,
            votes: 134,
            userRating: 4.1,
            availability: true,
            price: 99.99,
            runtime: "2.28.10",
        });
        jurassicHunt.addGenres([1, 15, 17]);

        /*-----------------------------------------------------------------------------------------------*/
        const f9 = await movies.create({
            id: 512,
            title: "F9",
            released: "2021-05-19",
            image: "",
            description: "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
            rating: 7.5,
            votes: 3828,
            userRating: 5,
            availability: true,
            price: 99.99,
            runtime: "2.40.25",
        });
        f9.addGenres([1, 5, 17]);

        /*-----------------------------------------------------------------------------------------------*/
        const pawPatrol = await movies.create({
            id: 513,
            title: "PAW Patrol: The Movie",
            released: "2021-08-09",
            image: "",
            description: "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
            rating: 7.9,
            votes: 494,
            userRating: 5,
            availability: true,
            price: 99.99,
            runtime: "2.10.10",
        });
        pawPatrol.addGenres([3, 8, 2, 4]);

        /*-----------------------------------------------------------------------------------------------*/
        const escapeRoom = await movies.create({
            id: 514,
            title: "Escape Room: Tournament of Champions",
            released: "2021-07-01",
            image: "",
            description: "Six people unwittingly find themselves locked in another series of escape rooms, slowly uncovering what they have in common to survive as they discover all the games that they've played before.",
            rating: 7.1,
            votes: 452,
            userRating: 5,
            availability: true,
            price: 99.99,
            runtime: "2.0.50",
        });
        escapeRoom.addGenres([1, 17, 13]);

        /*-----------------------------------------------------------------------------------------------*/
        const luca = await movies.create({
            id: 514,
            title: "Luca",
            released: "2021-06-17",
            image: "",
            description: "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
            rating: 8,
            votes: 4637,
            userRating: 5,
            availability: true,
            price: 99.99,
            runtime: "2.48.20",
        });
        luca.addGenres([3, 4, 8, 9]);

        /*-----------------------------------------------------------------------------------------------*/
        const theBossBaby = await movies.create({
            id: 514,
            title: "The Boss Baby: Family Business",
            released: "2021-07-01",
            image: "",
            description: "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
            rating: 7.8,
            votes: 1431,
            userRating: 3,
            availability: true,
            price: 99.99,
            runtime: "2.0.33",
        });
        theBossBaby.addGenres([3, 4, 2, 8])

        /*-----------------------------------------------------------------------------------------------*/

        const spaceJam = await movies.create({
            id: 514,
            title: "Space Jam: A New Legacy",
            released: "2021-07-08",
            image: "",
            description: "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
            rating: 7.4,
            votes: 2281,
            userRating: 3.6,
            availability: true,
            price: 99.99,
            runtime: "2.15.13",
        });
        spaceJam.addGenres([3, 4, 8, 15])

        /*-----------------------------------------------------------------------------------------------*/
        const malignant = await movies.create({
            id: 514,
            title: "Malignant",
            released: "2021-09-01",
            image: "",
            description: "Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities with a mysterious tie to her past.",
            rating: 7.1,
            votes: 626,
            userRating: 1.4,
            availability: true,
            price: 99.99,
            runtime: "1.55.13",
        });
        malignant.addGenres([11, 17, 13, 5])

        /*-----------------------------------------------------------------------------------------------*/

        const theTomorrowWar = await movies.create({
            id: 514,
            title: "The Tomorrow War",
            released: "2021-07-02",
            image: "",
            description: "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past. A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
            rating: 8.1,
            votes: 4217,
            userRating: 4.6,
            availability: true,
            price: 99.99,
            runtime: "1.52.23",
        });
        theTomorrowWar.addGenres([1, 15, 2])

        /*-----------------------------------------------------------------------------------------------*/

        const dontBreatheTwo = await movies.create({
            id: 514,
            title: "Don't Breathe 2",
            released: "2021-08-12",
            image: "https://upload.wikimedia.org/wikipedia/en/4/41/Don%27t_Breathe_%282016_film%29.png",
            description: "The film stars Jane Levy, Dylan Minnette, Daniel Zovatto, and Stephen Lang, and focuses on three friends who get trapped inside a blind man's house while breaking into it. ... Don't Breathe premiered at South by Southwest on March 12, 2016, and was theatrically released on August 26, 2016, by Screen Gems and Stage 6 Films.",
            rating: 7.7,
            votes: 784,
            userRating: 2.7,
            availability: true,
            price: 99.99,
            runtime: "2.05.02",
        });
        dontBreatheTwo.addGenres([17, 11])
    } catch (err) {
        allMovies = {
            error: "Can't Fetch Genres",
            originalError: err,
        };
    } finally {
        return allMovies;
    }
};

module.exports = {
    moviesMockUp,
};