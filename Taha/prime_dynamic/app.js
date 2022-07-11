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
    var res=true;
    var prime=""
    // console.log(no);
    for(let i=2;i<=no-1;i++){
        if(no%i==0){
            res=false;
            break;
        }
    }
    if(res==true){
        prime="yes"
    }
    else{
        prime="no"
    }
    // console.log(prime)
    var pagedata={pagename:"result",result:prime};
    res.render("home",pagedata);
    // res.redirect("/result");
})

app.listen(3000,()=>{
    console.log("server running");
})