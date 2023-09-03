// console.log('hello world');
require('dotenv').config()
const http = require('http')

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('hello nodejs')
  } else if (req.url == '/login') {
    res.end('<h1>You are in login page</h1>')
  }
})

server.listen(PORT, () => {
  console.log(`server is started at http://localhost:${PORT}`);
})
