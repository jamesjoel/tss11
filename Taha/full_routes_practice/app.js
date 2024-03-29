const express=require("express");
const app=express();
const routes=require("./config/routes.js");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"))
app.use(routes);


const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log("Server running")
})