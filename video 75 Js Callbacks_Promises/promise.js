console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    if (a < 0.5) {
        reject("No random number was not supporting you 1");
        // resolve("Kya baat karre...");
    }
    else {
        setTimeout(() => {
            resolve("resolved 1")       // .then(value)
            console.log('Yes I am done 1');
        }, 3000);
    }
})
// prom1.then((res) => {        // result of relsolve/reject
//     console.log(res);            
// }).catch((aror) => {
//     console.log(aror);
// })

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    if (a < 0.5) {
        reject("No random number was not supporting you 2");
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done 2');
            resolve("resolved 2")
        }, 2000);
    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    if (a < 0.5) {
        reject("No random number was not supporting you 3");
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done 3');
            resolve("resolved 3")
        }, 1000);
    }
})

// let prom4 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     console.log(a);
//     if (a < 0.5) {
//         reject("No random number was not supporting you 4");
//     }
//     else {
//         setTimeout(() => {
//             console.log('Yes I am done 4');
//             resolve("Adnan 4")
//         }, 1000);
//     }
// })

// let prom5 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     console.log(a);
//     if (a < 0.5) {
//         reject("No random number was not supporting you 5");
//     }
//     else {
//         setTimeout(() => {
//             console.log('Yes I am done 5');
//             resolve("Adnan 5")
//         }, 1000);
//     }
// })



// let p6 = Promise.all([prom1, prom2, prom3])
// p6.then((a) => {
//     console.log(a);
// }).catch(aror => {
//     console.log(aror);
// })
// let p6 = Promise.allSettled([prom1, prom2, prom3])
// p6.then((a) => {
//     console.log(a);
// }).catch(aror => {
//     console.log(aror);
// })
// let p6 = Promise.race([prom1, prom2, prom3])
// p6.then((a) => {
//     console.log(a);
// }).catch(aror => {
//     console.log(aror);
// })
let p6 = Promise.any([prom1, prom2, prom3])
// let p6 = Promise.any([prom1, prom2, prom3, prom4, prom5])
p6.then((a) => {
    console.log(a);
}).catch(aror => {
    console.log(aror);
})
// let p6 = Promise.resolve([prom1, prom2, prom3])
// // let p6 = Promise.resolve([prom1, prom2, prom3, prom4, prom5])
// p6.then((a) => {
//     console.log(a);
// }).catch(aror => {
//     console.log(aror);
// })
// let p6 = Promise.reject([prom1, prom2, prom3])
// // let p6 = Promise.reject([prom1, prom2, prom3, prom4, prom5])
// p6.then((a) => {
//     console.log(a);
// }).catch(aror => {
//     console.log(aror);
// })




