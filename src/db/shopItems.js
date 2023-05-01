const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const usr = process.env.MONGODB_USERNAME;
const pw = process.env.MONGODB_PW;
const database = process.env.MONGODB_SHOP_DB;
const cltn = process.env.MONGODB_SHOP_CLN;
const urlCode = process.env.MONGODB_URL_CODE;

const uri = `mongodb+srv://${usr}:${pw}@${urlCode}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function fetchShopItems() {
  let dataArr = [];

  const collection = client.db(database).collection(cltn).find();
  await collection.forEach((data) => {
    return dataArr.push(data);
  });

  return dataArr;
}

/**
 *
 * @param {string} id -id of the item to delete
 * @returns {object} the item deleted
 */
async function deleteshopItem(id) {
  const item = client
    .db(database)
    .collection(cltn)
    .findOneAndDelete({ _id: id });
  return item;
}

module.exports = {
  fetchShopItems,
  deleteshopItem,
};
