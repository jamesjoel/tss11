const MongoClient = require("mongodb").MongoClient;
const config = require("./config");
module.exports = (cb)=>{
    MongoClient.connect(config.dbUrl, cb);
}