const mongodb = require("../config/database");
const dbName="soltec";
const dbCol="student";

module.exports.search = (obj,cb)=>{
    mongodb((err,con)=>{
        let db=con.db(dbName);
        db.collection(dbCol).find(obj).toArray(cb)
    })
}

module.exports.add= (where,cb)=>{
    mongodb((err,con)=>{
        let db=con.db(dbName);
        db.collection(dbCol).insertOne(where,cb)
    })
}

module.exports.edit = (where,obj,cb)=>{
    mongodb((err,con)=>{
        let db=con.db(dbName);
        db.collection(dbCol).updateMany(where,{$set:obj},cb)
    })
}

module.exports.remove = (obj,cb)=>{
    mongodb((err,con)=>{
        let db=con.db(dbName);
        db.collection(dbCol).deleteMany(obj,cb)
    })
}