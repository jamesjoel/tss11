const express = require("express");
const app = express();


app.use(express.static(__dirname+"/assets"));
app.set("view eingine", "ejs")
app.set("/", (req, res)=>{
    res.render("layout");
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
 console.log("server status");
})