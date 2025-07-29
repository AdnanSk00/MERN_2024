console.log(".....Map, Filter & Reduce in array.....");

let arr = [1, 3, 5, 7, 9, 11];
console.log(arr);
let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }
// console.log(newArr);


// let newArr2 = arr.map((item, index, array)=>{
let newArr2 = arr.map((item)=>{
    return item**2;
});
console.log(newArr2, typeof newArr2);   // OR ↙

// const square = (item) =>{
//     return item**2;
// }
// console.log(arr.map(square));


const greaterThantwentyfive = (e)=>{
    if(e>25){
        return true;
    }
    return false;
}
console.log(newArr2.filter(greaterThantwentyfive));


let arr2 = [2, 4, 6, 5, 3, 1];
const red = (a, b)=>{
    // console.log(a,"+",b);
    return a+b;
}
console.log(arr2.reduce(red));
// Aise array ko print karo jab hume milta ho  'red' function ko apply karte hai arr2 per


arey = Array.from("Adnan");
console.log(arey);

console.log(Array.from("Plastine"));

arrayMaking1 = Array.from(Array(6).keys())
console.log(arrayMaking1);

arrayMaking2 = Array.from(Array(6))
console.log(Object.keys(arrayMaking2))

