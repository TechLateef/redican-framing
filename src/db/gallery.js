const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

const usr = process.env.MONGODB_USERNAME
const pw = process.env.MONGODB_PW
const database = process.env.MONGODB_GALLERY_DB
const cltn = process.env.MONGODB_GALLERY_CLN
const urlCode = process.env.MONGODB_URL_CODE

const uri = `mongodb+srv://${usr}:${pw}@${urlCode}/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

async function fetchGallery() {
       let dataArr = []
      
       const collection = client.db(database).collection(cltn).find()
       await collection.forEach((data) => {
           return dataArr.push(data)
       })

   return dataArr
}

module.exports = {
   fetchGallery,
} 