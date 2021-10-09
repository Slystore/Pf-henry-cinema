const { role } = require('../../db.js');

const rolesMockUp = async() => {
    try {
        await role.create({
            "name": "admin",
        });
        await role.create({
            "name": "user"
        });
        await role.create({
            "name": "moderator"
        })
    } catch (err) {
        console.log({
            error: "Can't Fetch Genres",
            originalError: err,
        });
    };
}
module.exports = { rolesMockUp }