const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT


app.use(express.json())
app.use(cors())

const {addReview} = require('./Controller/controller')

// require controller file here
app.get('/')
app.post('/review', addReview)

// set up endpoints

app.listen(PORT, console.log(`Rocking out on ${PORT}`))