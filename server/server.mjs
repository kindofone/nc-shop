import http from 'http';
import fetch from 'node-fetch';

const hostname = 'localhost';
const port = 3001;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000);
  res.setHeader('Content-Type', 'application/json');

  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});