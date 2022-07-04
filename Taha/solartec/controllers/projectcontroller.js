const express=require("express")
const routes=express.Router();

routes.get("/",(req,res)=>{
    var pagedata={pagename:"project/project", title:"ProjectPage"}
    res.render("layout", pagedata);
})
module.exports = routes;