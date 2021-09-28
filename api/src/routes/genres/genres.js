
const {Router} = require('express')
const { genres } = require('../../db')

const router = Router()

router.get('/', (req, res) => res.json('hola3'))
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
// router.put()
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