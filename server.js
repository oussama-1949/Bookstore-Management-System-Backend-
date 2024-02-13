const express = require ('express')
const server = express()
const port = 3000
const bookRouter = require ('./Routes/RoutesBooks')
const authorsRouter = require ('./Routes/RoutesAuthors')
require('dotenv').config();

server.use(express.json())


server.use('/api/',bookRouter)

server.use('/api/',authorsRouter)



server.listen(process.env.port || port , () => {
    console.log('Welcome to our Port : ' +port);
} )

