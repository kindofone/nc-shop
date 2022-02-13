import http from 'http';
import fetch from 'node-fetch';
import urlParse from 'url-parse';

const hostname = 'localhost';
const port = 3001;

const server = http.createServer(async (req, res) => {
  const {query} = new urlParse(req.url, true);
  const {resource} = query;

  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000);
  res.setHeader('Content-Type', 'application/json');

  let apiURL = 'https://fakestoreapi.com/products';
  if (resource === 'categories') {
    apiURL += '/categories';
  }

  const response = await fetch(apiURL);
  const data = await response.json();

  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});