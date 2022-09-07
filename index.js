const http = require('http');
const url = require('url');
const fs = require('fs');

const port = process.env.PORT || 8080;


const server = http.createServer((req, res) => {

  const parsedURL = '.' + req.url;
  
  fs.readFile(parsedURL, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      const page404 = fs.readFileSync('./404.html');
      res.write(page404)
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  })
});

server.listen(port, '127.0.0.1', () => {
})