const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const { url, method } = req
  if (url === '/') {
    res.write(`<html lang="en">
    <head>
      <title>Form</title>
    </head>
    <body>
      <form action="/message" method="POST">
        <input type="text" name="mano" />
        <button type="submit">Send</button>
      </form>
    </body>`)
    res.end()
  } else if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY DATA')
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
})

server.listen(3000)
