const express=require("express")
const routes=express.Router();

routes.get("/",(req,res)=>{
    var pagedata={pagename:"feature/feature", title:"FeaturePage"}
    res.render("layout", pagedata);
})
module.exports = routes;