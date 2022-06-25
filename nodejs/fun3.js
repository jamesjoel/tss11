function demo(a, b, c)
{
    var x = a+b;
    var y = x/c;
    var z = y+100;

    var data = { m : y, n : z};
    return data;    
}











var a = demo(10, 20, 6);
console.log(a.n);

var ans = demo(100, 100, 2);
console.log(ans.n);





