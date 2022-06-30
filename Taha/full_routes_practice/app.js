const express=require("express");
const routes=require("./config/routes.js");
const app=express();

app.use(express.static(__dirname+"/public"))

app.set("view engine", "ejs");


app.use(routes);


const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log("Server running")
})