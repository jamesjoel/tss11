var arr=[2,4,5,53,2,5,3];
var d=3;
// var n=5;
function rotateArr(arr, d){
    // code here
    var arr1=[];
    var i=0;
    var x=arr.length-1;
    while(x>=0){
        if(x<=d){
            arr1[i]=arr[x];
            i++;
        }
        x--;
    } 
    return arr1;
}
var arr1 = rotateArr(arr,d);
console.log(arr1);