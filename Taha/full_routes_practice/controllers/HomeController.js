const app=require("express");
const routes=app.Router();

routes.get("/",(req,res)=>{
    // var pagedata ={ pagename : "home/home"  , iframe : "home/iframe"}
    var pagedata ={ pagename : "home/home", iframe : "iframe"}
    res.render("layout" , pagedata);

})
// routes.get("/iframe",(req,res)=>{
//     // var pagedata ={ pagename : "home/home"  , iframe : "home/iframe"}
//     var pagedata ={ pagename : "home/iframe"}
//     res.render("layout" , pagedata);

// })
module.exports= routes;