console.log("Solution of Exercise - 9 of video 59");
/*
 Create a faulty calculator using JavaScript
 This faulty calculator does following:
 1. It takes two numbers as input from the user
 2. It performs wrong operations as follows:
    + --> -
    - --> +
    - --> /
    / --> **

    It performs wrong operation 10% of the times
 */

let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "**"
}


if (random > 0.1){
    // perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`);
    // let result = eval(a, c, b);
    // alert(`The result is ${result}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}


else{
    // perform wrong calculation
    c = obj[c];
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}