const { response } = require("express");
var express = require("express");
var app = express();

app.get("/", (request, response)=>{
         response.sendFile(__dirname+"/home.html");
});


app.get("/about", (request, response)=>{
           response.sendFile(__dirname+"/about.html")
});


app.get("/contact", (request, response)=>{
            response.sendFile(__dirname+"/contact.html")
});


app.get("/help", (request, response)=>{
    response.sendFile(__dirname+"/help.html")
});



app.listen(8888, ()=>{
    console.log("recognising")

});




