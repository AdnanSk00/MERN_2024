let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys());
    console.log(arr);
    let c = arr.slice(1,).reduce((a, b)=> a*b );
    return c;
}

function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++){
        console.log(fac,"=", fac,"*",index);
        fac = fac * index;
    }
    return fac;
}
console.log(factorial(a),"\n");
console.log(facFor(a));