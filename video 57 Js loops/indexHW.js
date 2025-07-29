const obj = {
    harry : 98,
    rohan : 70,
    aakash : 7,
    shaikh : 'Addy'
}
// const marksKey = Object.values(obj)
const nameKey = Object.keys(obj)
console.log(nameKey);
for(let i = 0; i<nameKey.length; i++){
    // console.log(`Marks of ${nameKey[i]} : ${marksKey[i]}`)
    console.log(`Marks of ${nameKey[i]} : ${obj[nameKey[i]]}`)
}


for(const val in obj){
    // console.log("Marks of",val,":",obj[val]);
    console.log(`Marks of ${val} : ${obj[val]}`);
}


const userNumber = (number)=>{
    let userEnter = prompt("Enter the number : ");
    if(userEnter == number){
        alert("You entered right number");
    }
    else{
        alert("Try again")
        return userNumber(number)
    }
}
let correct = userNumber(56);

// let correctNumber = 10;
// while(true){
//     let userNumber = prompt("Guess the number : ");
//     userNumber = parseInt(userNumber);

//     if(isNaN(userNumber)) {
//         alert("Invalid input! Please enter a number.");
//     }
//     else if(userNumber === correctNumber) {
//         alert(" Congratulations! You guessed the correct number.");
//         break;
//     }
//     else{
//         alert("Try again!")
//     }
// }

var meanOfNumbers = (num1, num2, num3, num4, num5)=>{
    let ans = (num1+num2+num3+num4+num5)/5;
    return ans;
}
let result = meanOfNumbers(7, 5, 3, 4, 3);
console.log("Mean of 5 numbers are :",result);
