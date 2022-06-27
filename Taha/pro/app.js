var express=require("express");
var app=express();

app.set("view engine" , "ejs");
app.use(express.static(__dirname+"/public"));
app.get("/",(req,res)=>{
    // res.sendFile(__dirname+"/home.html");
    var name="Taha";
    var collage="IPS ACADEMY";
    var mobno_="8770547897";

    var arr=[name,23,collage,mobno_];
    var pagedata={a:arr};
    res.render("home",pagedata);
});


app.get("/about",(req,res)=>{
    // res.sendFile(__dirname+"/about.html");
    res.render("about");
});
app.get("/contact",(req,res)=>{
    // res.sendFile(__dirname+"/contact.html");
    res.render("contact");
});
app.listen(3000,()=>{
    console.log("Server Running");
});