const path = require('path')
const express = require('express')
const server = express()

const shopRoute = require('./routes/shopItems')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/shop', shopRoute)

server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

module.exports = server
