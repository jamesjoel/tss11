// var sol = require("./sample");
// var grade =require("./task_performance");
// console.log(grade);
var data=["taha","raghav","shyam","tushar", "gaurav", "amit", "vijay", "jaya"];





function rev(arr){ 
    var n = arr.length; //8
    var temp = [];
    // var m = 0;
    for(var i=n-1; i>=0; i--)
    {
        // console.log(arr[i]);
        // temp[m]=arr[i];
        temp.push(arr[i]);

        // m++;
    }
    return temp;
}

var arr1 = rev(data);
console.log(arr1);