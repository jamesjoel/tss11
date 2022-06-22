// !=========================== REVERSE ARRAY =====================!

var arr=["taha","raghav","shyam","tushar"];
function reverse(){
    var a=arr.length-1;
    var arr1=[];
    while(a>=0){
        arr1=arr[a];
        var x=console.log(arr1);
        a--;
    }
    return x;
}
var arr1=reverse(arr);
console.log(arr1);

// !=========================== LEAP YEAR  =====================!

var year=2000;
function leap_year(year){
    var leap="";
    leap = year%400==0 || year%4==0 && year%100!=0 ? leap="Leap year" : leap="Not a Leap Year";
    return leap;
}
var leap = leap_year(year);
console.log(leap);


// !=========================== GST  =====================!


// ****slab=[1,2,3]*****
var slab=2;
var gst=[0.05,0.08,0.18]
var price = 30000;
var yes=true;
function bill(slab,gst,price,yes){
    if (yes){
        switch(slab){
                case 1: var x = gst[0]*price*0.03;
                return x;
                case 2: var x = gst[1]*price*0.03;
                return x; 
                case 3: var x = gst[2]*price*0.03;
                return x;
            }
    }
    else{
            var x = price*0.03;
            return x;
    }
    
}
var bills=bill(slab,gst,price,yes);
console.log(bills);


// !=========================== ROOM ALLOTMENT  =====================!

var rooms={lux:23000,pre:12000,nor:8000};
// ***************** must be between 1,2,3,4..10****************
var days=2;
function prices(days,rooms){
    for (var x=0; x<=days ; x++){
        if(rooms.lux){
            var y= x += 0.1;
            var z = y+rooms.lux;
        }else if(rooms.pre){
            var y= x += 0.1;
            var z = y+rooms.pre;
        }else if(rooms.nor){
            var y= x += 0.1;
            var z = y+rooms.nor;
        }
        else{
            console.log("Plese choose proper room type");
        }
    }
return z;
}
var price1 = prices(days,rooms);
console.log(price1);



var obj={ rev : arr1, leapyear : leap, gst : bills , room : price1 };

module.exports=obj;