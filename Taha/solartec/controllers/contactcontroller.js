const express=require("express")
const routes=express.Router();
const Contact=require("../model/Contact")

routes.get("/",(req,res)=>{
    var pagedata={pagename:"contact/contact", title:"ContactPage"}
    res.render("layout", pagedata);
})

routes.post("/list",(req,res)=>{
    Contact.add(req.body,(err)=>{
        res.redirect("/contact/info")
    })
})
routes.get("/info",(req,res)=>{
    Contact.show({},(err,result)=>{
        // console.log(result)
        // return;

        let pagedata={pagename:"contact/info",title:"contact-Information",result:result}
        res.render("layout", pagedata)
    })
})
module.exports = routes;