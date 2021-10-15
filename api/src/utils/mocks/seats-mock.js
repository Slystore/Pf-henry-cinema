const { seats } = require('../../db.js');

const seatsMockUp = async() => {
    await seats.create({
        row: "A",
        number: 1,
    });
    await seats.create({
        row: "A",
        number: 2
    });
    await seats.create({
        row: "A",
        number: 3
    });
    await seats.create({
        row: "A",
        number: 4
    });
    await seats.create({
        row: "A",
        number: 5
    });
    await seats.create({
        row: "A",
        number: 6
    });
    await seats.create({
        row: "A",
        number: 7
    });
    await seats.create({
        row: "A",
        number: 8
    });
    await seats.create({
        row: "A",
        number: 9
    });
    await seats.create({
        row: "A",
        number: 10
    });
    await seats.create({
        row: "B",
        number: 1
    });
    await seats.create({
        row: "B",
        number: 2
    });
    await seats.create({
        row: "B",
        number: 3
    });
    await seats.create({
        row: "B",
        number: 4
    });
    await seats.create({
        row: "B",
        number: 5
    });
    await seats.create({
        row: "B",
        number: 6
    });
    await seats.create({
        row: "B",
        number: 7
    });
    await seats.create({
        row: "B",
        number: 8
    });
    await seats.create({
        row: "B",
        number: 9
    });
    await seats.create({
        row: "B",
        number: 10
    });
    await seats.create({
        row: "C",
        number: 1
    });
    await seats.create({
        row: "C",
        number: 2
    });
    await seats.create({
        row: "C",
        number: 3
    });
    await seats.create({
        row: "C",
        number: 4
    });
    await seats.create({
        row: "C",
        number: 5
    });
    await seats.create({
        row: "C",
        number: 6
    });
    await seats.create({
        row: "C",
        number: 7
    });
    await seats.create({
        row: "C",
        number: 8
    });
    await seats.create({
        row: "C",
        number: 9
    });
    await seats.create({
        row: "C",
        number: 10
    });
    await seats.create({
        row: "D",
        number: 1
    });
    await seats.create({
        row: "D",
        number: 2
    });
    await seats.create({
        row: "D",
        number: 3
    });
    await seats.create({
        row: "D",
        number: 4
    });
    await seats.create({
        row: "D",
        number: 5
    });
    await seats.create({
        row: "D",
        number: 6
    });
    await seats.create({
        row: "D",
        number: 7
    });
    await seats.create({
        row: "D",
        number: 8
    });
    await seats.create({
        row: "D",
        number: 9
    });
    await seats.create({
        row: "D",
        number: 10
    });
    await seats.create({
        row: "E",
        number: 1
    });
    await seats.create({
        row: "E",
        number: 2
    });
    await seats.create({
        row: "E",
        number: 3
    });
    await seats.create({
        row: "E",
        number: 4
    });
    await seats.create({
        row: "E",
        number: 5
    });
    await seats.create({
        row: "E",
        number: 6
    });
    await seats.create({
        row: "E",
        number: 7
    });
    await seats.create({
        row: "E",
        number: 8
    });
    await seats.create({
        row: "E",
        number: 9
    });
    await seats.create({
        row: "E",
        number: 10
    })
}

module.exports = { seatsMockUp }