const createShow = async (req, res, next) => {
    try {
        
        res.json({message: 'No shows where found'})
    } catch (error) {
        next(error)
    }
}

module.exports = createShow