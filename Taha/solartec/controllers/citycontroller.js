const routes=require("express").Router()
const City=require("../model/City")
const mongodb=require("mongodb")


routes.get("/",(req,res)=>{

    City.show_state_distince({},(err,result)=>{
        // var objId=mongodb.ObjectId(req.pramas.a)
        // console.log(result);
        // return;
        let pagedata={pagename:"city/city",title:"City_Logic", result:result, city : []}
        res.render("layout",pagedata)
    })
})
routes.post("/more",(req,res)=>{
    var state = req.body.state;
    //console.log(req.body);return;
    
    City.show({ state : state },(err, result)=>{
        City.show_state_distince({},(err,result2)=>{
            res.render("layout", { result : result2, pagename:"city/city",title:"City_Logic", city : result })
        });
    })
})

module.exports=routes