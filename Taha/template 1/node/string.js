var randomString = require("random-string-gen");

var random=randomString({
    length:10,
    type:"alphabetic"
});
//*************************************With Function*******************************************************88 */
// function disemvowel(str) {
    //     var str_Arr = str.split('');
//     for (var x = 0; x < str.length; x++) {
    //       if (str[x]=="a"||str[x]=="e"||str[x]=="i"||str[x]=="o"||str[x]=="u"||str[x]=="A"||str[x]=="E"||str[x]=="I"||str[x]=="O"||str[x]=="U") {
//         str_Arr[x] = '';
//     }
// }
// return str_Arr.join('');
// }
// var ans=disemvowel(random);
// console.log(ans);
//*************************************Without Function*******************************************************88 */
var a=0;
var res=[];
var b=random.split('');
var vowel=['a','e','i','o','u','A','E','I','O','U'];
for (var x=0;x<b.length;x++){
    // for(var y=0;y<vowel.length;y++){
        // }
            if(b[x]==vowel[x]){
                res[a]=b[x];
                a++;
            }
    // if(!vowel.includes(b[x])){
    //     res[a] = b[x];
    //     // console.log(res[a]);
    //     a++;
    // }
}
console.log(res);