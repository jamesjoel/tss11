const express= require("express")
const app=express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.render("home");
})

app.post("/primeresult",(req,res)=>{
    // return;
    req.body.number =parseInt(req.body.number);
    // console.log(req.body);

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
        result="not a prime"
    }else{
        result="is a prime"
    }
    console.log(result);
})

app.listen(3000,()=>{
    console.log("server running");
})