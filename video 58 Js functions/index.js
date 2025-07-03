function nice(name) {
    console.log("Hey " + name + "you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey",name,"your tshirt is nice!");
    console.log("Hey ",name," your course is good too!");
    console.log(`Hey ${name} your language is well!`);
    console.log(`Hey ${name} your explaination is excellent!`,"\n");
}

nice("Hero");

// nice("Harry");

function sum(a, b, c = 3) {
    console.log(a,"+",b,"=",a + b);
    // console.log(a, b, c);
    return a + b + c;
}

// result1 = sum(4);       // NaN - Not a Number
// sum(4, 8);
result1 = sum(4, 8);
console.log(result1 + "\n");
// result2 = sum(2, 5);
// console.log(result2 + "\n");
result3 = sum(3, 6, 4);
console.log(result3 + "\n");

console.log("Sum of these numbers are :", result1);
// console.log("Sum of these numbers are :", result2);
console.log("Sum of these numbers are :", result3 + "\n");

function nonArrow(w){
    console.log("I am not an arrow function -",w);
}
nonArrow("samjhe ?");


const func1 = (x)=>{
    console.log("I am an arrow function -",x);
}

func1(34);
func1(96);
func1(21);
