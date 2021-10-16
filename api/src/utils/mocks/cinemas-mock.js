const { cinemas } = require("../../db.js");

const cinemasMockUp = async() => {
    await cinemas.create({
        name: "Kaia",
        location: "32105 Lulu Ways"
    });
    await cinemas.create({
        name: "Leta",
        location: "05061 Greenholt Underpass"
    });
    await cinemas.create({
        name: "Clark",
        location: "0352 Upton Estates"
    });
}


module.exports = { cinemasMockUp }