let age = 15;

if(age >= 10 && age <= 20){
    console.log("Age is in between 10 & 20");
} else {
    console.log("Age is not in between them");
}

let switchAge = 10;
switch(switchAge){
    case 6 : 
        console.log("Age is less than 10");
        break;
    case 10 : 
        console.log("Age is barabar");
        break;
    case 15 :
        console.log("Age is in between 10 & 20");
        break;
    default :
        console.log("Invalid for switch");
}

let num1 = 24;
if(num1 % 2 == 0 && num1 % 3 == 0 ){
    console.log(num1,"is divisible by 2 & 3");
}
let num2 = 34;
if(num2 % 2 == 0 || num2 % 3 == 0 ){
    console.log(num2,"is divisible by either 2 or 3");
}

let drivingAge = 21;
let result = drivingAge < 18 ? "You cannot Drive" : "You can Drive";
console.log(result);
