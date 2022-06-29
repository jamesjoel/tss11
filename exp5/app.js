var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", ["nahid", "taha"]);

app.use(express.static(__dirname+"/assets"));






app.get("/", (req, res)=>{
    console.log("welcome")
    var pagedata = { pagename : "home", title : "Home Page", nav : "navbar" }
    res.render("layout", pagedata);
})




app.get("/about", (req, res)=>{

    console.log("welcome")
    var pagedata = { pagename : "about", title : "About Page", nav : "navbar"  }
    res.render("layout", pagedata);
})


app.get("/contact", (req, res)=>{

    console.log("welcome")
    var pagedata = { pagename : "contact", title : "Contact Page", nav : "navbar2"  }
    res.render("layout", pagedata);
})




var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
/*
    res.send() ----------------- send data

    res.sendFile() ----------------- html file send

    res.render() ----------------- ejs file send and data also


*/