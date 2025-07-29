console.log("Hey this is tutorial 55 of Js on 26th May 2024");

let a = 5;

a = a + 2;
console.log(a);

let b = 6;
let c = "adnan";
let d = 'a';
var x = "xerox machine";
var x = "kya hai";
// var 55a = "rehan";           // Not Allowed

console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c, typeof d, typeof x);

// const a1 = 6;
// a1 = a1 + 1;                 // Not Allowed because a1 is constant

{
    let a = 0;
    console.log(a);
}
console.log(a);


let r = "Resistant";
let s = 22;
let t = 3.14;
const u = true;
let v = undefined;
let w = null;

console.log(r, s, t, u, v, w);
console.log(typeof r, typeof s, typeof t, typeof u, typeof v, typeof w);

let o = {
    "name" : "Shaikh",
    "job role" : 5600,
    "is_handsome" : true
} 
console.log(Object.keys(o));
// console.log(Object.keys(o["name"]));

console.log(Object.values(o),'\n');

console.log(o, typeof o);
o.salary = "10crores";
// console.log(o);
o.salary = "50crores";
console.log(o);
console.log(o.is_handsome);