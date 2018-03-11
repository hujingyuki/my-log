'use strict'

//导入http模块
let http = require('http');

//创建http server，并传入回调函数
let server = http.createServer(function(req, res) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(req.method + ":" + req.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    res.writeHead(200, { 'Content-type': 'text-html' });
    // 将http响应的html内容写入response
    res.end('<h1>Hello World</h1>');
})

server.listen(8888);
console.log('Server IS running at http:127.0.0.1:8888');

let url = require('url');
console.log(url.parse('http://user:pass@host.com:8888/path/to/file?query=string#hash'));