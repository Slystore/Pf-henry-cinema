const { cinemas } = require('../../db')

const deleteCinema = async (req, res, next) => {
    try {
        const { id } = req.params
        const query = await cinemas.findByPk(id)
        if(query) {
            await cinemas.destroy({
            where: { id }
        })
        return res.json('The cinema has been deleted successfully!')
    } else return res.status(404).json({message: 'Error found'})
    } catch (error) {
        next(error)
    }
}

module.exports = deleteCinema