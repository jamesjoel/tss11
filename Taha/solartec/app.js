const express=require("express");
const app=express();
const routes=require("./config/routes")

app.set("view engine", "ejs")
app.use(express.static(__dirname+"/public"))


app.use(express.json());
app.use(express.urlencoded());

app.use(routes);


const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log("server running")
})