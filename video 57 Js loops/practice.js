// I am clearing my concept on objects & loops today on Sunday 12th January 2025

let items = ['jam', 0, 'shoe', 'egg', 5, 'she', 56]

const dreams = "BAGHDAD"

console.log(items, typeof items);

console.log(Object.keys(items));
console.log(Object.values(items));

for(const key in items){
    console.log(key, items[key]);
}

console.log('------------');


for(const key of items){
    console.log(key, items[key]);
}

// NOTE - forEach work on array.
items.forEach((things, position) => {
    console.log(position, things);
});

// -----------------OBJECT-----------------

let obj =  {
    name : 'Kontas',
    salary : '2cr',
    age : 17,
    city : 'Jalgaon',
}

console.log(Object.values(obj));

for(const details in obj){
    console.log(details,":",obj[details]);
}

// for(const details of obj){
//     console.log(details);   // not allowed
// }
