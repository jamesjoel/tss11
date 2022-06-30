const { application } = require("express");
var express = require("express");
var demo = express();

demo.set("view engine", "ejs");
 
demo.use(express.static(__dirname+"/assets"));

demo.get("/", (request, response)=>{
    response.render("home");
})

demo.get("/contact", (request, response)=>{
    response.render("contact");
})

demo.get("/about", (request, response)=>{
    response.render("about");
})


demo.get("/help", (request, response)=>{
    response.render("help");
})



demo.listen(1500, ()=>{
 console.log("recognising");

})
