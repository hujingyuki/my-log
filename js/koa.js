'use strict'
let koa = require('koa');
let app = koa();

app.use('/test', function*() {
    yield doReadFile1();
    let data = yield doReadFile2();
    this.body = data;
});

app.listen(3000);