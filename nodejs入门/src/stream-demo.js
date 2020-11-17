const fs = require('fs');
const http = require('http');

function readStream(request, response) {
    const fStream = fs.createReadStream('./test.txt');
    fStream.pipe(response);

    fStream.on('end', () => {
        console.log('read end');
    });
}

function writeStream(request, response) {
    const fStream = fs.createWriteStream('./write.txt', {
        flags: 'a+'
    });
    request.pipe(fStream);

    request.on('end', () => {
        console.log('write end');
        response.write('ok');
        response.end();
    });
}

const server = http.createServer((request, response) => {
    if (request.url === '/write') {
        writeStream(request, response);
    } else {
        readStream(request, response);
    }
});

server.listen(8080, 'localhost');