//challenge start
// function splitBill(amount,numPeople){
//      return  `Each person needs to pay ${amount/ numPeople}`
// }

// ---------------------solution 1---------------------------------
// let splitBill=(amount,numPeople)=>{
//     return  `Each person needs to pay ${amount/ numPeople}`
// }

// ---------------------solution 2---------------------------------
let splitBill=(amount,numPeople)=>(`Each person needs to pay ${amount/ numPeople}`)

console.log(splitBill(10,2));
console.log(splitBill(10,4));


// --------------------------------------------------------------------
console.log("--------------------stretch goal start---------------------")
// function countdown(startingNumber ,step){
//     let countFromNum = startingNumber + step
//     return function decrease(){
//     countFromNum -=step;
//     return countFromNum;
//  }
//  }

 let countdown=(startingNumber ,step)=>{
    let countFromNum = startingNumber + step
    return  decrease=()=>( countFromNum -=step)
 }
 const countingDown =countdown(20,2);
 
 console.log(countingDown());
 console.log(countingDown());
