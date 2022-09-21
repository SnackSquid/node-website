
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, './routes')});
})
app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: path.join(__dirname, './routes')});
})
app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', { root: path.join(__dirname, './routes')});
})

app.listen(port, () => {
  console.log(`Server is updog at ${port}`);
})