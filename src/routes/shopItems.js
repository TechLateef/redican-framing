const express = require("express");
const router = express.Router();
const db = require("../db/shopItems");

router.get("/", (req, res) => {
  db.fetchShopItems()
    .then((data) => {
      res.json({ products: data.map((products) => products) });
    })
    .catch((err) => {
      console.trace();
      console.error(err);
    });
});

//this route is for deleting a specific item in the database
router.delete("/:itemId", async (req, res) => {
  db.deleteshopItem(req.itemId)
    .then((item) => {
      res.json({ product: data });
    })
    .catch((err) => {
      console.error(err);
    });
});
module.exports = router;
