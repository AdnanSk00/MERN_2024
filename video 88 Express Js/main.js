// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World23\n');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hey Adnan</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// ----------------------------------------------

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// app.use(express.static('files'))
// app.use('/static', express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  console.log("get request working...");
  res.send('Hello World...!')
})

app.get('/about', (req, res)=>{
  res.send('About us')
})

app.get('/contact', (req, res)=>{
  res.send('Contact me!')
})

app.get('/blog', (req, res)=>{
  res.send('Hello Blog Bro')
})

// app.get('/blog/intro-to-js', (req, res)=>{
//   // Logic to fetch intro to js from the db
//   res.send('Hello JavaScript(intro to Js!)')
// })

// app.get('/blog/intro-to-python', (req, res)=>{
  //   // Logic to fetch intro to python from the db
  //   res.send('Hello intro-to-python!')
  // })
  
  app.get('/blog/:slug', (req, res)=>{
    // Logic to fetch {slug} from the db
    res.send(`Hello ${req.params.slug}`)
    
    // For URL: http://localhost:3000/blog/adnan?mode=dark&region=in
    console.log(req.params);
    // will output { slug: 'adnan' }
    console.log(req.query);
    // will output { mode: 'dark', region: 'in' }
  })

  // app.get('/blog/:slug/:secondSlug', (req, res)=>{
  //   res.send(`Hello ${req.params.slug} and ${req.params.secondSlug}`)
  // })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})