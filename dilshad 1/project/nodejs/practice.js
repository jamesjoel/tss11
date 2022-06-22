function  newFun(t,a){
    console.log(t)
    console.log(a)
    if(t>80 && t<=100){
      if(a>80 && a<=100){
        console.log("Ecellent");
      }
      else if(a>70 && a<=80){
          console.log("Excellent");
      }
      else if(a>60 && a<=70){
          console.log("very good");
      }
      else if(a>50 && a<=60){
          console.log("good");
      }
      else if(a>40 && a<=50){
          console.log("average");
      }
      else if(a<40){
          console.log("poor");
      }
    }
    else if(t>70 && t<=80){
        if(a>80 && a<=100){
            console.log("very good");
        }
        if(a>70 && a<=80){
            console.log("very good");
        }
        else if(a>60 && a<=70){
            console.log("very good");
        }
        else if(a>50 && a<=60){
            console.log("good");
        }
        else if(a>40 && a<=50){
            console.log("average");
        }
        else if(a<40){
            console.log("poor");
        }
    }
    else if(t>60 && t<=70){
        if(a>80 && a<=100){
            console.log("good");
        }
        else if(a>70 && a<=80){
            console.log("good");
        }
        else if(a>60 && a<=70){
            console.log("good");
        }
        else if(a>50 && a<=60){
            console.log("good");
        }
        else if(a>40 && a<=50){
            console.log("average");
        }
        else if(a<40){
            console.log("poor");
        }
    }
    else if(t>50 && t<=60){
        if(a>80 && a<=100){
            console.log("average");
        }
        else if(a>70 && a<=80){
            console.log("average");
        }
        else if(a>60 && a<=70){
            console.log("average");
        }
        else if(a>50 && a<=60){
            console.log("average");
        }
        else if(a>40 && a<=50){
            console.log("average");
        }
        else if(a<40){
            console.log("poor");
        }
    }
    else if(a<50){
        console.log("poor");
    }
  }

newFun(280, 64);



































































































