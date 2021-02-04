"use strict";

const {prototype} = require("events");
const http = require('http');
const port = 3000;



const quotes = [
    "Be yourself; everyone else is already taken. -Oscar Wilde",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Be the change that you wish to see in the world. - Mahatma Gandhi"
];


const index = Math.floor(Math.random() *quotes.length);
const randomQuote = quotes[index];

http.createServer((req, res) => {
   
 
res.writeHead(200, {"Content-type": "text/plain"});
res.write(randomQuote);

res.end();
}).listen(port);
// console.log(randomQuote);

