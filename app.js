require('dotenv').config()

const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

//endpoints
const authRouter = require('./routes/api/auth')
const usersRouter = require('./routes/api/users')
const categoriesRouter = require('./routes/api/categories')

//add logger
app.use(logger(formatsLogger))

//add cors
app.use(cors())

//handle body json
app.use(express.json())

//handle static files
app.use(express.static("public"))

//handle routes
app.use('/api/auth', authRouter)

//handle users
app.use('/api/users', usersRouter)

//handle categories
app.use('/api/categories', categoriesRouter)


//other routes
// app.use('/api/books', booksRouter)

//handle not found rout
app.use((req, res) => {
    res.status(404).json({message: 'Not found'})
})

// handle error case
app.use((err, req, res, next) => {
    const {status = 500, message = "SERVER ERROR"} = err
    res.status(status).json({message})
})
module.exports = app