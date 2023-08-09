const {User} = require('./models/user')
const {Review} = require('./models/reviews')


module.exports = {
    addReview: async (req, res) => {
        try {
            const {title, date, rating, review} = req.body
            await Review.create({title, date, rating, review})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR in addReview')
            console.log(error)
            res.sendStatus(400)
        }
    }
}