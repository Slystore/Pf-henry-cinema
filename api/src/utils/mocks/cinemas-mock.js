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

// {
//   name: "Leola",
//   location: "926 Halvorson Lake"
// },
// {
//   name: "Julien",
//   location: "23225 Fahey Canyon"
// },
// {
//   name: "Karl",
//   location: "488 Eduardo Glen"
// },
// {
//   name: "Bailee",
//   location: "131 Dean Port"
// },
// {
//   name: "Britney",
//   location: "51962 Sauer Court"
// },
// {
//   name: "Tillman",
//   location: "72258 Ian Mountain"
// },
// {
//   name: "Marvin",
//   location: "7421 May Points"
// }