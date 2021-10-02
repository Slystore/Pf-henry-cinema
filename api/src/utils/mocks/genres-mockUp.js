const { genres } = require('../../db.js');

const genresMockUp = async() => {
    try {
        //1
        await genres.create({
            name: "Action",
        });
        //2
        await genres.create({
            name: "Adventure",
        });
        //3
        await genres.create({
            name: "Animation",
        });
        //4
        await genres.create({
            name: "Comedy",
        });
        //5
        await genres.create({
            name: "Crime",
        });
        //6
        await genres.create({
            name: "Documentary",
        });
        //7
        await genres.create({
            name: "drama",
        });
        //8
        await genres.create({
            name: "Family",
        });
        //9
        await genres.create({
            name: "Fantasy",
        });
        //10
        await genres.create({
            name: "History",
        });
        //11
        await genres.create({
            name: "Horror",
        });
        //12
        await genres.create({
            name: "Music",
        });
        //13
        await genres.create({
            name: "Mystery",
        });
        //14
        await genres.create({
            name: "Romance",
        });
        //15
        await genres.create({
            name: "Science Fiction",
        });
        //16
        await genres.create({
            name: "Tv Movie",
        });
        //17
        await genres.create({
            name: "Thriller",
        });
        //18
        await genres.create({
            name: "War",
        });
        //19
        await genres.create({
            name: "Wester",
        });
    } catch (err) {
        console.log({
            error: "Can't Fetch Genres",
            originalError: err,
        });
    }
};
module.exports = {
    genresMockUp,
};