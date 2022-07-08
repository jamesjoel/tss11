const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req ,res)=>{
    res.render("demo");
});

app.post("/primeInt",(req,res)=>{
    req.body.number = parseInt(req.body.number);

    var no = req.body.number;
    var prime=true;
    var result="";
    for(let i=2;i<no;i++){
        if(no%i==0){
            prime=false;
            break;
        }
    }
    if(prime){
        result="It's a prime number"
    }else{
        result=" It's not a prime number"
    }
    console.log(result);
});

app.listen(3000,()=>{
    console.log("server running");
});