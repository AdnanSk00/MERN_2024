// const http = require('node:http'); // commen js

// Import module using commen js
// const fs = require("fs")

// Using ES6 module-> "type"="module"
// import http from "http"    

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   // res.setHeader('Content-Type', 'text/plain');  
//   res.setHeader('Content-Type', 'text/html');  
//   res.end('<h1>Hello Adnan Shaikh</h1>'); 
// }); 

// server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
// });

// -------------------------------------------


// import {a, e} from "./mymodule.js"
// console.log(a, e);

// import obj from "./mymodule.js"
// console.log(obj);                //or
// import fourJan25 from "./mymodule.js"
// console.log(fourJan25);

// (function(exports, require, module, __dirname, __filename){

//     // Module code actually lives here

// })

const a = require("./mymodule2.js")
// console.log(a)
console.log(a, __dirname, __filename)