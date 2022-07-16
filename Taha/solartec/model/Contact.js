const database = require("../config/database")
const dbName="soltec"
const dbCol="contact"

module.exports.add = (obj,cb)=>{
    database((err,con)=>{
        con.db(dbName).collection(dbCol).insertOne(obj,cb)
    })
}
module.exports.show = (where,cb)=>{
    database((err,con)=>{
        con.db(dbName).collection(dbCol).find(where).toArray(cb)
    })
}
module.exports.remove = (where,cb)=>{
    database((err,con)=>{
        con.db(dbName).collection(dbCol).deleteMany(where,cb)
    })
}
module.exports.change = (where,obj,cb)=>{
    database((err,con)=>{
        con.db(dbName).collection(dbCol).updateMany(where,{$set:obj},cb)
    })
}