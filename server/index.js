const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const {db} = require('./database')
const {User} = require('./Controller/models/user')
const {Review} = require('./Controller/models/reviews')


app.use(express.json())
app.use(cors())

User.hasMany(Review)
Review.belongsTo(User)

const {addReview} = require('./Controller/controller')

// require controller file here
app.get('/')
app.post('/review', addReview)

// set up endpoints
db.sync()
    .then(() => {
        app.listen(PORT, console.log(`Rocking out on ${PORT}`))
    })
    .catch(err => console.log(err))