var fs = require("fs");
var path1="../virus/";
var path=require("path");
var file_path=path.resolve();
console.log(file_path);
var arr=fs.readdirSync(path1);
console.log(arr);
var x=0;
while(x<arr.length){
    var del=arr[x];
    fs.unlinkSync(file_path + "../virus/" + del);
    x++;
}
console.log("File deleted",arr);

// console.log(file_path);
// var a =fs.unlink()