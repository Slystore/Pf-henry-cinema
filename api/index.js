const server = require('./src/app')
const { conn, users,role } = require('./src/db.js');
const { moviesMocks } = require('./src/utils/mocks/movies-muckUp');
const { genresMockUp } = require('./src/utils/mocks/genres-mockUp.js');
const mockUps = require('./src/utils/mocks/users-mock')
const rolesMockUp = require('./src/utils/mocks/roles-mockUp')
const { PORT } = process.env;



conn.sync({ force: true })
    .then(async() => {
        const usersList = await users.findAll()
        const rolesList = await role.findAll()

        console.log('DB connected!');
        server.listen(3001, () => console.log(`Server listening`));
        await genresMockUp();
        await moviesMocks();
        if (usersList.length === 0) {
            await users.bulkCreate(mockUps);
        }
        if(rolesList.length === 0 ){
            await role.bulkCreate(rolesMockUp)
            console.log('fill de DB con los roles')
          }
    })
    .catch((e) => console.log('Connection Failed!', e))