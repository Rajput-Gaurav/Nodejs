// import http core module:
const http = require('http');

const hostname = 'localhost';
const port = 3000;

// create a server:
const server = http.createServer((req, res) => {
    // print headers data when connect to the browser:
    console.log(req.headers);

    res.statusCode =200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body><h1>Hello World!</h1></body></html>`);
})

// too start the server using:
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})