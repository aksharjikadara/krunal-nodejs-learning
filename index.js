// console.log('hello world');
require('dotenv').config()
const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT

const filePathByAsync = fs.readFile('index.html', 'utf-8' , (error, data) => {
  // console.log('filePathByAsync', data);
})
const filePathBySync = fs.readFileSync('index.html', 'utf-8')
// console.log('filePathBySync', filePathBySync);

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('hello nodejs')
  } else if (req.url == '/login') {
    res.end('<h1>You are in login page</h1>')
  } else if (req.url == '/html') {
    res.setHeader('Content-type', 'text/html')
    res.end(filePathBySync);
  } else {
    res.end('<h1>404 not found</h1>')
  }
})

server.listen(PORT, () => {
  console.log(`server is started at http://localhost:${PORT}`);
})
