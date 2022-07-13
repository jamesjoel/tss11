const mongodb=require("../config/database");
let dbName="soltec";
let dbCol="teacher";


module.exports.search= (where, cb)=>{
    mongodb((err,con)=>{
        console.log("connection ")
        let db=con.db(dbName);
        db.collection(dbCol).find(where).toArray(cb)
    })
}
 module.exports.add =(obj, cb)=>{
    mongodb((err,con)=>{
        let db=con.db(dbName);
        db.collection(dbCol).insertOne(obj,cb)
    })
 }

 module.exports.edit = (where,obj,cb)=>{
    mongodb((err,con)=>{
        let db=con.db(dbName);
        db.collection(dbCol).updateMany(where,{$set:obj},cb)
    })
 }
 module.exports.remove=(obj,cb)=>{
    mongodb((err,con)=>{
        let db=con.db(dbName);
        db.collection(dbCol).deleteMany(obj,cb)
    })
 }
// module.exports.add=()