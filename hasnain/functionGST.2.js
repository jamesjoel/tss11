function gst(price, slab){

switch(slab){
    case 1 :  var a = price*5/100

    case 2 :  var a = price*12/100

    case 3 :  var a = price*18/100

var b = price+a;
return b;
}

}
var final_price = gst()
console.log(final_price);
