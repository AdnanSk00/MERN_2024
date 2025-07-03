// function getData() {
// async function getData() {
// //     // Simulate(intezar) getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//             console.log("Before resolving");
//             reject("reject bhi kardo yaar")
//         }, 4000);
//     })
// }

// NOTE :- (ii) Due to async getData(), it will run in background. But If I want to wait for its execution so I will write await before that getData() in main(). await only works when we write async before those func()/main() in which that await func() present.

// NOTE :-
// Settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


// Q : What is Fetch API in JS ?
async function getData() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(response => console.log(json))

    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(x);
    // let data = await x.text()
    let data = await x.json()
    // console.log(data)
    return data
}
// NOTE :- Above function() will return the promise.

// Example POST method implementation :-
// async function getData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },  
//         })
//     let data = await x.json()
//     return data
// }

async function main() {
    console.log("Loading modules");

    console.log("do something else");

    console.log("Load data");

    let data = await getData()
    // let data = getData()
    console.log(data);  

    console.log("process data");

    console.log("task 2");
}

main()

// NOTE :- If I don't want to print the below data until the getData() load, there are two method to solve this problem (i) After resolving promise we can print data using .then() which is same as callback() approach & (ii) By using async/await function.

// data.then((v) => {
//     console.log(v);
//     console.log(data);

//     console.log("process data");

//     console.log("task 2");
// })



