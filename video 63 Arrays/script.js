console.log("...............Arrays..............");

let arr = [1, 2, 4, 5, 7];
// Index   0, 1, 2, 3, 4

arr[0] = 92;
console.log(arr, typeof arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

// Array Methods -
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr);

console.log("==========================================");

let a = [66, 5, 4, 3, 2, 11];
console.log(a);
console.log(a.pop());       // shows element
console.log(a);
console.log("length = ",a.length);      
console.log(a.push(100));       // Shows length
console.log(a.push("element"));
console.log(a);
console.log(a.shift());         // shows element
console.log(a);
console.log(a.unshift("Aagaz"));     // Shows length
// a.unshift()
console.log(a);
console.log(delete a[6]);
console.log(a);
console.log(a.length);
console.log(a[6], a[10]);

console.log("==========================================");


let p = [33, 22, 11];
let q = [44, 55, 66];
let r = [99, 88, 77];
// console.log(p);
// console.log(q);
// console.log(r);
console.log(p, q, r);
console.log(p.concat(r, q));
// console.log(p);

console.log("==========================================");

let a1 = [6, 3, 5, 24, 2, 10];
console.log(a1);
console.log(a1.sort());
console.log(a1);
console.log(a1.splice(2, 3, 3741));
// splice is used to replace from index[2] to 3 values with new value(3741)
console.log(a1);
console.log(a1.slice(4));
console.log(a1.slice(1, 5));
console.log(a1);
console.log(a1.reverse());
console.log(a1.reverse());





