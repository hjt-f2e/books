const http = require('http');

// 创建一个http服务器
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.end('hello node.js');
});

// 监听 127.0.0.1:8080 端口
server.listen(8080, '127.0.0.1');

http.get('https://www.baidu.com', res => {
    res.pipe(process.stdout);
});

http.request({
    host: 'https://www.baidu.com/',
    method: 'POST'
}, res => {
    res.pipe(process.stdout);
});