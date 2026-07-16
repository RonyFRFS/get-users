import http from 'node:http';

http.createServer((request, response) => {
    response.end('hello client')
}).listen(3000);