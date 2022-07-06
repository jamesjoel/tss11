var express = require("express");
var app = express();

// app.use(express.static(__dirname+"/public"))

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/home.html");
// });
// app.get("/about",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// });
// app.get("/contact",(req,res)=>{
//     res.sendFile(__dirname+"/contact.html");
// });

//  app.listen(3000, ()=>{
//     console.log("server status");
//  });
app.set("view engine","ejs");
app.use(express.static(__dirname+"/assests"));
app.get("/" , (req,res)=>{


var arr = ["fruits", "vegetables", "food", "electronics", 'home appliances', "household", "ornaments"];

var pagedata = { things : arr };

res.render("home", pagedata);
})
app.get("/about", (req, res)=>{
var a = "sweetdish";
var b = "furnitutre";

var pagedata = { food : a, household : b, quantity : 25 };

res.render("about", pagedata);
})

app.get("/contact", (req, res)=>{
res.render("contact");
})




app.listen(3000, ()=>{
console.log("server status ");
});