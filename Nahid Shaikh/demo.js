var friendNames= ["mohsin","nahid","arbaz","amir","imad","fahad"];

var d = friendNames.length - 1;
//console.log(d);
// var n=5;
function rotateArr(friendNames, d){
    // code here
    var arr1=[];
    var x = d;
    for(var i=0; i<=d; i++){

        arr1[i] = friendNames[x];
        x--;

    }
    
    return arr1;
}
var arr1 = rotateArr(friendNames,d);
console.log(arr1);

