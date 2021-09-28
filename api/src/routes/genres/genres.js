
const {Router} = require('express')
const { genres } = require('../../db')
const axios = require('axios')

const router = Router()

router.get('/', async (req, res) => {
    let {data} = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e8fbbb2d04ff9c9e7e6927e92de2b1d1')
    data = data.genres
    const genresQuery = await genres.findAll()
    if(genresQuery.length > 0) {
        await genres.bulkCreate(data)
        console.log('La base de datos ha sido cargada de generos')
    } else res.json(data)
})

router.post('/create', async (req, res) => {
    console.log('hola')
    try {
        const { name } = req.body;
        const [ genreQuery, created ] = await genres.findOrCreate({
            where: {
                name
            }
        })
        if(created) res.json(genreQuery);
        else res.status(404).send('La receta ya existia en la base de datos')
    } catch (error) {
        console.log(error)
    }

})
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const name  = req.body;
        const updateGenre = await genres.update( name , {
            where: {
                id
            }
        })
        if(updateGenre[0] !== 0) res.json('El genero fue actualizado correctamente')
        else res.status(404).send('Ha ocurrido un error, la actualizacion solicitada no pudo completarse')
        
    } catch (error) {
        console.log(error)
    }


})
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const genreById = await genres.findByPk(id)
        console.log(genreById)
        if(genreById) {
            genreById.destroy()
            res.json('Genero eliminado con exito')
        } else res.status(404).send('No existe ese genero')
    } catch (error) {
        console.log(error)
    }
} )

module.exports = router