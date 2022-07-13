const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";

module.exports = (cb)=>{
    MongoClient.connect(dbUrl, cb)
}