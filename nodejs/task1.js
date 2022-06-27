function maksheet(m, s, e, att){
    var avg = (m+s+e)/300 * 100;
    var ans = "";
    if(avg > 80) // excellent
    {
        if(att > 80)
        {
            ans ="excellent";
        }
        if(att > 70 && att <= 80)
        {
            ans ="excellent";

        }
        if(att > 60 && att <= 70)
        {
            ans ="very good";

        }
        if(att > 50 && att <= 60)
        {
            ans ="good";

        }
        if(att <= 50)
        {
            ans ="fail";

        }
    }
    if(avg > 70 && avg <= 80) // very good
    {
        
    }
    if(avg > 60 && avg <= 70) // good
    {
        
    }
    if(avg > 50 && avg <= 60) // pass
    {
        
    }
    if(avg <= 50) // fail
    {

    }


    return ans;
}

var ans = maksheet(97, 85, 67, 69);
console.log(ans);