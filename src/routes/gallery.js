const express = require('express')
const router = express.Router()
const db = require('../db/gallery')

router.get('/', (req, res) => {
    db.fetchGallery()
    .then((data) => {
        res.json({galleryItems: data.map((imageData) => imageData)})
    })
    .catch((err) => {
        console.trace()
        console.error(err)
    })
})

module.exports = router