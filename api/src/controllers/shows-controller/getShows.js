const getShows = async (req, res, next) => {
    try {
        const showsQuery = await shows.findAll()
        showsQuery ?
        res.json(showsQuery) :
        res.json({message: 'No shows where found'})
    } catch (error) {
        next(error)
    }
}

module.exports = getShows