const { screening } = require('../../db.js');

const screeningMockUpKaia = async() => {
    await screening.create({
        time: 20
    });
    await screening.create({
        time: 22
    });
    await screening.create({
        time: 24
    });
}


const screeningMockUpLeta = async() => {
    await screening.create({
        time: 20
    });
    await screening.create({
        time: 22
    });
    await screening.create({
        time: 24
    });
}

const screeningMockUpClark = async() => {
    await screening.create({
        time: 20
    });
    await screening.create({
        time: 22
    });
    await screening.create({
        time: 24
    });
}


module.exports = { screeningMockUpKaia, screeningMockUpLeta, screeningMockUpClark }