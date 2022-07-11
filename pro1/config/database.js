const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";

module.exports = function(cb){
    MongoClient.connect(dbUrl, cb);
}

/*

var x = require("database");

x((err, con)=>{
    
})



*/