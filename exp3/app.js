var express = require("express");
var app = express();

// app.get("route", callfunction(2-parameter first one is request, second one is respons)=>{

// })
app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{

    var arr = ["#451277", "#ACDC10", "#003366", "#BDFC10", '#BEEA01', "#9BDDC1", "#936300"];

    var pagedata = { color : arr };


    res.render("home", pagedata);
})
app.get("/about", (req, res)=>{
    var a = "rohit";
    var b = "indore";

    var pagedata = { name : a, city : b, age : 25 };

    res.render("about", pagedata);
})

app.get("/contact", (req, res)=>{
    res.render("contact");
})




app.listen(3000, ()=>{
    console.log("server running ");
});