const http = require('http')

const server = http.createServer((req, res) => {
  const { url, method, body } = req
  if (url === '/') {
    res.write(`<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Message</title>
    </head>
    <body>
      <h1>Messages</h1>
    </body>
    </html>
    `)
    res.end()
  }
})

server.listen(3000)
