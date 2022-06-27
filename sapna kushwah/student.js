
demo (m,s,e,a)
{
var x=m+s+e;
var y=x*100/300;
var percentage=y;
var atendence=a;
if(percentage>=80 && atendence>=80)    
{
  var answer="exilent";
}
if(percentage>80 && percentage<90 && atendence>70 && atendence<80)
{
    var answer="vergood";
}
if( percentage>80  && percentage<90 && atendence>70 && atendence<80    )
{
    var answer="verygood";
}
if( percentage>80 && percentage<90 && atendence>60 && atendence<70  )
{
    var answer="good";
}
if (percentage>80 && percentage<90 && atendence>50 && atendence<60 )
{
    var answer="pass";
}
if(percentage>70 && percentage<80 && atendence>80)
{
    var answer="very good";
}
if(percentage>70 && percentage<80 &&  atendence>70     && atendence<80       )
{
    var answer="very good";
}
if(percentage>70 && percentage<80 && atendence>60 && atendence<70)
{
    var answer="good";
}
if(percentage>70  && percentage<80 && atendence>50 && atendence<60)
{
    var answer="pass"
}
if (percentage>60 && percentage<70 && atendence>80)
{
    var answer="very good";
}
if(percentage>60 && percentage<70 && atendence>70 && atendence<80)
{
    var answer="very good";
}
if (percentage>60 && percentage<70 && atendence>60 && atendence<70)
{
    var answer="good";
}
if(percentage>60 && percentage<70 && atendence>50 && atendence<60)
{
    var answer="pass"
}
if(percentage>50 && percentage<60 && atendence>80)
{
    var answer="pass";
}
if(percentage>50 && percentage<60 && atendence>70 && atendence<80)
{
    var answer="pass";
}
if (percentage>50 && percentage<60 && atendence>60 && atendence<70)
{
    var answer="pass";
}
if(percentage>50 && percentage<60 && atendence>50 && atendence<60)
{
    var answer="pass";
}
if(percentage>50 && percentage<60 && atendence<50)
{
    var answer="pass"
}
if(percentage<50 && atendence>80 && atendence<90)
 {
        var answer="fail";
}
if(percentage<50 && atendence>70 && percentage<80)
{
    var answer="fail";
}
if (percentage<50 && atendence>60 && percentage<70)
{
    var answer="fail";
}
if (percentage<50 && atendence>50 && percentage<60)
{
    var answer="fail";
}
if (percentage<50 && atendence<50)
{
    var answer="fail";
}






var a= answer;
return answer;


}



var a=demo(     85,89,88,80              )
console.log(a);