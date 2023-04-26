const path = require('path')
const express = require('express')
const server = express()

const shopRoute = require('./routes/shopItems')
const galleryRoute = require('./routes/gallery')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/shop', shopRoute)
server.use('/api/v1/gallery', galleryRoute)

server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

module.exports = server
