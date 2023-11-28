const fs = require('fs')

const requestHandler = (req, res) => {
  const { url, method } = req
  if (url === '/') {
    res.write(`<html lang="en">
    <head>
      <title>Form</title>
    </head>
    <body>
      <form action="/message" method="POST">
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </body>`)
    return res.end()
  } else if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
}

module.exports = requestHandler
