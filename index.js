const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const index = './index.html'

const server  = http.createServer((req, res) => {
  fs.readFile(index, (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

server.listen(port, '127.0.0.1', () => {
})