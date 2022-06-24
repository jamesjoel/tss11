 function marksheet( m,s,e,attendence)
 {
    var x= m+s+e;
    var y= x*100/300;
    var parcentage= y;
    var p= attendence*100/100;
    var attendance= p;
    if(parcentage>80 && parcentage>=80 && attendence>80 && attendance>=80)
    {
        var ans="excellent";

    }
    if( parcentage>=70 && parcentage<80 && attendance>=70 && attendance<80)
    {
        var ans="very good"; 
    }
    if(parcentage>=60 && parcentage<70 && attendence>=60 && attendance<70)
    {
        var ans="good";
    }
    if(parcentage>=50 && parcentage<60 && attendence>=50 && attendance<60)
    {
        var ans="pass";
    }
    if(parcentage<50 && attendence<50)
    {
        var ans="fail";
    }
    if( parcentage>=80 && parcentage<90 && attendance>=70 && attendance<80)
    {
        var ans="very good"; 
    }
    if( parcentage>=80 && parcentage<90 && attendance>=60 && attendance<70)
    {
        var ans=" good"; 
    }
    if( parcentage>=80 && parcentage<90 && attendance>=50 && attendance<60)
    {
        var ans="pass"; 
    }
    if( parcentage>=80 && attendance<50)
    {
        var ans="fail"; 
    }
    if( parcentage>=70 && parcentage<80 && attendance>=60 && attendance<70)
    {
        var ans=" good"; 
    }
    if( parcentage>=70 && parcentage<80 && attendance>=50 && attendance<60)
    {
        var ans="pass"; 
    }
    if( parcentage>=70 && parcentage<80 && attendance<50)
    {
        var ans="fail"; 
    }
    if(parcentage>=60 && parcentage<70 && attendence>=50 && attendance<60)
    {
        var ans="pass";
    }
    if(parcentage>=60 && parcentage<70 && attendence<50)
    {
        var ans="fail";
    }
    
   
    
    var data= ans;
    return ans;
 }
 var data = marksheet(90,90,90,90);
 console.log(data);