const database = require("../config/database");
const dbName = "tss11_new";
const collName = "student";

module.exports.search = function(where, cb){
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find(where).toArray(cb)
    });
}

module.exports.add = function(obj, cb){
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(obj, cb)
    })
}

module.exports.edit=(where, obj, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany(where, { $set : obj }, cb)
    })
}

module.exports.remove=(where, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).deleteMany(where, cb)
    }) 
}



/*

var stu = require("Student");

stu.a()

*/