// var a=1["excelent","verygood","good","total","poor"];
// var subject={maths:23,science:34,english:56};
// var percent=percent+=subject;
// console.log(percent)
// switch(a){
//     case a[0]:
//     case a[1]:
//     case a[2]:
//     case a[3]:
//     case a[4]:
// }


var subjects = [['maths', 80], ['science', 77], ['english', 88]];

var total = 0;

for (var i=0; i < subjects.length; i++) {
        total += subjects[i][1];
        var avg = (total/subjects.length);
        var percent=(total/300)*100;
}
console.log(avg);
console.log("this is the percent", percent);

console.log("total grade: " + (total)/subjects.length);

        if (avg < 60){
          console.log("poor");      
          } 
        else if (avg < 70) {
                console.log("avrg"); 
                  } 
        else if (avg < 80) 
             {
                console.log("good"); 
        } else if (avg < 90) {
                console.log("vgood"); 
        } else if (avg < 100) {
                console.log("exclnt"); 
}