var express = require("express");
var app = express();
app.get("/",(req, res)=>{
    //  console.log("*************");
    //  console.log(req);
    // res.send("<h1>home</h1> ");
    res.sendFile(__dirname+"/home.html");
});
app.get("/about",(req, res)=>{
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact",( req,res)=>{
    res.sendFile(__dirname+"/contact.html");
});
app.get("/help",(req,res)=>{
    res.sendFile(__dirname+"/help.html");});




app.listen(3000 , ()=>{
    console.log("servar run");
} );