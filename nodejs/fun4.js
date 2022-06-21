function gst(price, slab)
{
    /*if(slab==1)
    {
        var a = price*5/100;
        var b = price+a;
    }
    if(slab==2)
    {
        var a = price*8/100;
        var b = price+a;
    }
    if(slab==3)
    {
        var a = price*18/100;
        var b = price+a;
    }
    return b;*/

    switch(slab){
        case 1 :    var a = price*5/100;
                    break;
                    
        case 2 :    var a = price*8/100;
                    break;
                    
                    
        case 3 :    var a = price*18/100;
                    break;
                    
    }
    var b = price+a;
    return b;
}



var final_price = gst(32500, 3);
console.log(final_price);