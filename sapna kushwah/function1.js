function marksheet(m,e,s,a)
{
    var x=m+e+s;
    var y=x*100/300;
    var p=a*100/365;
    if(y>80 && p>80)
    {
        console.log("excellent");
    }
    else if( y>70 && y<=80 && p>70 && p<=80)
    {
        console.log("very good");
    }
    else if(y>60 && y<=70 && p>60 && p<=70)
    {
        console.log("good")
    }
    else if(y>50 && y<=60 && p>50 && p<=60)
    {
        console.log("pass");
    }
    else if(y<50 && p<50)
    {
     console.log("fail");
    }
     else if(y>80 && p<80)
    {
        console.log("very good");
    }
    else if(y>80 && p<70)
    {
        console.log(" very good");
    }
    else if(y>80 && p<60)
    {
        console.log("pass")
    }
    else if(y>80 && p<50)
    {
        console.log("fail");
    }
    else if(y>70 && p<70)
    {
        console.log("good");
    }
    else if(y>70 && p<60)
    {
        console.log("pass")
    }
    else if(y>70 && p<50)
    {
        console.log("fail");
    }
     else if(y>60 && p<50)
    {
        console.log("fail");
    }
    else if(y>70 && p<50)
    {
        console.log("fail");
    }
 var data=[y,p];
 return data;

}
var data= marksheet(60,60,60,250);







    
