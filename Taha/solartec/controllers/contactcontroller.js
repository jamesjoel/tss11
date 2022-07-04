const express=require("express")
const routes=express.Router();

routes.get("/",(req,res)=>{
    var pagedata={pagename:"contact/contact", title:"ContactPage"}
    res.render("layout", pagedata);
})
module.exports = routes;