const { shows, movies } = require('../../db')

const getShows = async (req, res, next) => {

    try {

        const {id} = req.query;
        if(id){
            const movieQuery = await shows.findAll({
                include: [{
                    model: movies,
                    where:{
                        id
                    }
                }]
            })
            res.json(movieQuery)
        }
        const showsQuery = await shows.findAll()
        showsQuery ?
        res.json(showsQuery) :
        res.json({message: 'No shows where found'})
    } catch (error) {
        next(error)
    }
}

module.exports = getShows