const app = require('./app')
const {PORT,DB_HOST}=process.env
const mongoose = require('mongoose')

mongoose.set("strictQuery",true)

mongoose.connect(DB_HOST)
    .then(() => {
        console.log('connected to database')
        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`)
        })
    })
    .catch(err =>{
        console.error(err)
        process.exit(1)
    })
