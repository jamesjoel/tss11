const app=require("express");
const routes=app.Router();

routes.get("/",(req,res)=>{
    var pagedata ={ pagename : "contact/contact" }
    res.render("layout" , pagedata);

})
module.exports= routes;