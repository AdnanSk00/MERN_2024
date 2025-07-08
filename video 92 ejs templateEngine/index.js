const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// http://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
//   res.send('Hello Express World!')

    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ['Hey', 54, 65]
    // res.sendFile("templates/index.html", {root: __dirname})
    res.render("index", {siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "JioHotstar why and when?"
    let blogContent = "Its a very good brand"
    // res.sendFile("templates/blogpost.html", {root: __dirname})
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})