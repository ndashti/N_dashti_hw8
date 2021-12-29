function ingExtractor(str){
    const result=[]
    let strArray=str.split(" ")
    let pattern = /[a-zA-Z]{2,}ing+/
    for(let i=0;i<strArray.length;i++){
        if (pattern.test(strArray[i])){
            result.push(strArray[i])
        } 
    }
    return result
}
// 
str1="coming bringing Letting sing";
str2="going Ping, king sHrink dOing";
str3="zing went ring, ding wing SINk";
str4="doing e32ing"
console.log("coming bringing Letting sing -> "+ingExtractor(str1))
console.log("going Ping, king sHrink dOing -> "+ingExtractor(str2))
console.log("zing went ring, ding wing SINk -> "+ingExtractor(str3))
console.log("doing e32ing -> "+ingExtractor(str4))

