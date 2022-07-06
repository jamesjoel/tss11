const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
})

app.post("/save", (req, res)=>{
    
    res.render("save");
})


app.listen(3000, ()=>{
    console.log("server running");
})