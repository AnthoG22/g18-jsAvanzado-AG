const http = require('http');

const server = http.createServer((request,response)=>{
    const mymeType = { 'content-type' : 'text/html'}

    response.write('<html><body>hola desde mi primer servidor</body> </html>');
    response.end();
})

server.listen(8080);
console.log('servidor ejecutandose...');