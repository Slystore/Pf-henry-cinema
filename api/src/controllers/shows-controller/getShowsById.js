const getShowsById = async (req, res, next) => {
    try {
        const {id} = req.params
        const showsQuery = await shows.findByPk(id)
        showsQuery ?
        res.json(showsQuery) :
        res.json({message: 'No shows where found'})
    } catch (error) {
        next(error)
    }
}

module.exports = getShowsById