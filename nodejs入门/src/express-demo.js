const express = require('express');
const app = express();

// 监听一个 / get请求
app.get('/', (request, response) => {
    response.status(200).send('hello express, get method');
});

// 监听一个 / post请求
app.post('/', (request, response) => {
    response.status(200).send('hello express, post method')
});

// 监听本地 8080 端口
app.listen(8080);