console.log("........Arrays in loops.........");

console.log("\nRelationship between length and numerical properties");

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length, fruits);

fruits[5] = "mango";
console.log(fruits[5]);
console.log(Object.keys(fruits));   // !important
// for (const key in fruits){}

for (const key of fruits) {     // for-of loop access value of object and allowed on array
    console.log(key);
}
console.log(fruits.length);

fruits.length = 10;
console.log(fruits);
console.log(fruits[7]);
console.log(fruits.indexOf("peach"));


console.log("..........Loops...........");

let a = [1, 93, 5, 6, 88];
console.log(a, "\n");

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

a.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

let obj = {
    a : 1,
    b : 2,
    c : 3,
    length: 4
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}
for (const value of a) {
    console.log(value);
}


let object = {
    0 : "a",
    1 : "b",
    2 : "c",
    length:3
}
console.log(Array.prototype.join.call(object, "++"));

let new_obj = {
    0 : "1",
    1 : "2",
    2 : "3",
    4 : "4",
    5 : "5",
    6 : "6",
    length:7
}
console.log(Array.prototype.join.call(new_obj, "*"));