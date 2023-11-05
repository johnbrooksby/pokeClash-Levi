require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const {sequelize} = require('./util/database')
const {PORT} = process.env
const path = require('path')
const {register,login} = require('./controller/Authentication')
app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, "/../build")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../build/index.html'))
})

app.post('/register',register)
app.post('/login', login)

sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log('Here we GO!'))
})
