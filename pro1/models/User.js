const database = require("../config/database");
const dbName = "tss11_new";
const collName = "user";

 module.exports.add =  (obj, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(obj, cb);
    });
 }







 module.exports.changes =  (where, obj, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany(where, { $set : obj }, cb);
    })
 }
 module.exports.trash =  (where, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).deleteMany(where, cb);
    });
 }
 module.exports.bring =  (where, cb)=>{
    database((err, con)=>{
       var db = con.db(dbName);
       db.collection(collName).find(where).toArray(cb);
    });
 }
 