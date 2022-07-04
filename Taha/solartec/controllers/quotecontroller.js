const express=require("express")
const routes=express.Router();

routes.get("/",(req,res)=>{
    var pagedata={pagename:"quote/quote", title:"QuotePage"}
    res.render("layout", pagedata);
})
module.exports = routes;