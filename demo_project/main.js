// var info = require("./mod");
// var a = info.marksheet();
// var b = a.more();
// console.log(b.contact);

// var x = info.marksheet().more().contact;
/*var a = require("path"); // the "path" is a core module
var b = a.resolve();
console.log(b);*/

/*
var fs = require("fs");
var path = require("path");
var name = path.resolve();
var file_path = name +"/1.jpg";
fs.unlinkSync(file_path);
*/

var fs = require("fs");
var path = "./test/";

var arr = fs.readdirSync(path);

var path = require("path");
var file_path = path.resolve();

var n = arr.length;
for(var i =0; i<n; i++)
{
    var name = arr[i];
    
    fs.unlinkSync(file_path+"/test/"+name);
}



