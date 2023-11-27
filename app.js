const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>É nois!</title></head>')
  res.write('<body>')
  res.write('<h1>Title</h1><p>Hello from my NodeJS server!</p>')
  res.write('</body>')
  res.write('</html>')
  res.end()
})

server.listen(3000)
