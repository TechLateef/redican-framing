const express = require('express')
const router = express.Router()
const db = require('../db/shopItems')

router.get('/', (req, res) => {
    db.fetchShopItems()
    .then((data) => {
        res.json({products: data.map((products) => products)})
    })
    .catch((err) => {
        console.trace()
        console.error(err)
    })
})

module.exports = router