console.log("I am a 57 tutorial on Loops");

let a = 1;
// console.log(a);
// console.log(a + 1);
// console.log(a + 2 + "\n");

// for(let i = 0; i < 100; i++){
//     console.log(a + i);
// }

let wasila = {
    name: "Adnan",
    role: "Programmer",
    company: "Patanahi"
}

for (const key in wasila) {
    const element = wasila[key];
    console.log(element);
    console.log(key);
}
// for(const key of wasila){        // not allowed
//     console.log(wasila[key]);
// }
let obj = {
    name : "Adnan",
    role : "Programmer",
    company : "Patanahi"
}
console.log(obj);
for (const key in obj) {
        // const element = obj[key];
        // console.log(key);
        console.log(key,":", obj[key]);
}

for (const alpha of "Adnan"){       // iterable data structure - String
    console.log(alpha);
}

const arr = [2, 4, 6, 8];       // array is iterable
for (const value in arr) {      // for in loop - index
    console.log(value);
}
for (const value of arr) {      // for in loop - index
    console.log(value);         // for of loop - value
}

// let i = 0;
// while (i<6) {
//         console.log(i);
//         i++;
// }

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while (i<6) 

let i = 10;
let j = 1;
do {
    // console.log(i * j, "\n");
    console.log(i * j);
    j++;
} while (j < 6)