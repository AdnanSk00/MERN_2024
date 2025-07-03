console.log("Adnan is not a hacker now");
console.log("CWH is a hacker");

// Note:- If a function() having asynchronous nature in JS so Js executes that function() after some time means that function() is in pending.

setTimeout(() => {
    console.log("I am inside setTimeout 1");
}, 4000);

setTimeout(() => { console.log  ("I am inside setTimeout 2") }, 2000);
// NOTE :- Uper ke execution ko taal diya jayega 2 sec ke liye  

ekOrFunction = () => {
    console.log("Just for trial");
}
setTimeout(ekOrFunction, 5800);     // callback()

console.log("The End");



const fn = () => {
    console.log("Shaikh");
}
const callback_ekFuction = (arg, fn) => {
    fn();
    console.log(arg);
};

const loadScript = (src, callback_ekFuction) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback_ekFuction("Adnan", fn);
    document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback_ekFuction)

// // callback("Sk");