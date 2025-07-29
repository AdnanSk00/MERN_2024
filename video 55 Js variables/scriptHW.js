// Write a JavaScript program to store name, phone number and marks of a student using objects.


let object = {
    "name" : "Adnan Shaikh",
    "phone" : 9420988518,
    "marks" : 8.38 
}
console.log(object)

let num = "Adnan" + 56;
console.log(num, typeof num, "\n");

let obj = {}
obj.name = "Mr. Shaikh";
obj.phone = 9420988518;
obj.marks = 76.3;
console.log(obj, typeof obj);

const o = {
    "val" : "fourtyFive",
    // "val" : 258,
    56 : "good"
}
// o.val2 = 789;    // not allowed new key in const o
o.val = 45;        // able to update
console.log(o, typeof o,"\n");


let dictionary = {
    add : "jama karna",
    bad : "bura",
    sad : "dukhi",
    nice : "achcha",
    hand : "haath"
}
for(const key in dictionary){
    console.log(key);
    console.log(dictionary[key]);
}
console.log(dictionary.sad);
console.log(dictionary);