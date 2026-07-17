import http from 'node:http';

const users = [{
    name: 'Ronald Fernandes',
    age: 24,
    status: true
}, {
    name: 'valdiana bessa',
    age: 31,
    status: true
}, {
    name: 'Ane Bessa',
    age: 0,
    status: false
}];

const USERSJSON = JSON.stringify(users);

http.createServer((request, response) => {
    if (request.url === '/users') {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify(users));
}   else {
    response.writeHead(404, { 'content-type': 'application/json' });
        response.end(JSON.stringify({message : 'pagina nao encontrada'}));
    }
}).listen(3000);