var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", ["nahid", "taha"]);

app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/about", (req, res)=>{
    res.render("about");
})
app.get("/contact", (req, res)=>{
    res.render("contact");
})


var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
/*
    res.send() ----------------- send data

    res.sendFile() ----------------- html file send

    res.render() ----------------- ejs file send and data also


*/