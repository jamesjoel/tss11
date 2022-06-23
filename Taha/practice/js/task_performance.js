var maths=54;
var science=74;
var english=53;
var actual= maths+science+english ;

var total = (actual/300)*100;

var attendence=70;
var grade="";

console.log(total ,attendence)
function performance(t,a){
    if(t>80 && t<=100){
        if(a>80 && a<=100){
                grade="Excellent";
        }
        else if(a>70 && a<=80){
            grade="Excellent";
        }
        else if(a>60 && a<=70){
            grade="very good";
        }
        else if(a>50 && a<=60){
            grade="good";
        }
        else if(a>40 && a<=50){
            grade="average";
        }
        else if(a<40){
            grade="poor";
        }
    }
    else if(t>70 && t<=80){
        if(a>80 && a<=100){
            grade="very good";
        }
        if(a>70 && a<=80){
            grade="very good";
        }
        else if(a>60 && a<=70){
            grade="very good";
        }
        else if(a>50 && a<=60){
            grade="good";
        }
        else if(a>40 && a<=50){
            grade="average";
        }
        else if(a<40){
            grade="poor";
        }
    }
    else if(t>60 && t<=70){
        if(a>80 && a<=100){
            grade="good";
        }
        else if(a>70 && a<=80){
            grade="good";
        }
        else if(a>60 && a<=70){
            grade="good";
        }
        else if(a>50 && a<=60){
            grade="good";
        }
        else if(a>40 && a<=50){
            grade="average";
        }
        else if(a<40){
            grade="poor";
        }
    }
    else if(t>50 && t<=60){
        if(a>80 && a<=100){
            grade="average";
        }
        else if(a>70 && a<=80){
            grade="average";
        }
        else if(a>60 && a<=70){
            grade="average";
        }
        else if(a>50 && a<=60){
            grade="average";
        }
        else if(a>40 && a<=50){
            grade="average";
        }
        else if(a<40){
            grade="poor";
        }
        else if(a>40){
        grade="poor";
        }
    }
return grade;
}
performance(total,attendence);
// console.log(grade);
module.exports = grade;