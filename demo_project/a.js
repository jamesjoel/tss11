var obj = {
    name  : "sapna",
    age : 19,
    city : "indore",
    gender : "female",
    demo : function(a, b){
        return {
            result : a+b,
            hello : function(){
                console.log("****************************");
            }
        };
    }
};

module.exports = obj;