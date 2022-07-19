const database = require("../config/database")
const dbName="soltec"
const dbCol="city"

module.exports.add = (obj,cb)=>{
    database((err,con)=>{
        con.db(dbName).collection(dbCol).insertOne(obj,cb)
    })
}
module.exports.show = (where,cb)=>{
    database((err,con)=>{
        con.db(dbName).collection(dbCol).find(where).sort({state:1},{city:1}).toArray(cb)
    })
}
module.exports.show_state_distince = (where,cb)=>{
    database((err,con)=>{
        con.db(dbName).collection(dbCol).distinct("state", cb);
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