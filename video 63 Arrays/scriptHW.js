// const promt = require('prompt-sync')();

const arrNum = []
// console.log(arrNum);

for(let i = 0; i<10; i++){
    // arrNum[i] = promt(`Enter the number on index[${i}] - `)
    if(arrNum[i] == 0){
        break;
    }
}
console.log(arrNum);

let newArr = arrNum.filter((item)=>{
    if(item % 10 == 0){
        return true;
    }else{
        return false;
    }
})
console.log(newArr);

let squareArr = arrNum.map((item)=>{
    return item**2;
})
console.log(squareArr);

let n = 5;
factArr = Array.from(Array(n+1).keys())
console.log(factArr);
let result = factArr.slice(1,).reduce((a, b)=>a*b)
console.log("Factorial of",5,"=",result);