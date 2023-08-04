module.exports = {
    addReview: async (req, res) => {
        try {
            console.log(req.body)
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR in addReview')
            console.log(error)
            res.sendStatus(400)
        }
    }
}