"use strict";


const quotes = require("./quotes.js")

const http = require('http');
const port = 3000;


http.createServer((req, res) => {
    const index = Math.floor(Math.random() *quotes.length);
    const randomQuote = quotes[index];  
    console.log(randomQuote);
 
res.writeHead(200, {"Content-type": "text/plain"});
res.write(randomQuote);

res.end();
}).listen(port);

