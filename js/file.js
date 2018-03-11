'use strict'

let fs = require('fs');
let path = require("path");
//直接使用文件名可能找不到相对路径下的文件，使用path.join()
//__dirname 当前文件路径
//txt 文件要以utf-8编码保存

//读文件一readFile   readFileSync同步读取
fs.readFile(
    path.join(__dirname, "../sample.txt"), 'utf-8',
    function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }

    });


//写文件一wirite  writeSync
let buf = new Buffer("12345678");
fs.open("D:\\work\\hj\\Git\\test\\sample.txt", 'w', function(err, fd) {
    fs.write(fd, buf, 0, 8, null, function(err, written, buffer) {
            if (err) {
                console.log("写文件失败：" + err);
            } else {
                console.log("写入成功");
            }
        })
        //同步写入
        //fs.writeSync(fd, buf, 3, 9, 0);
});

//读文件二createReadStream
//buffer流读取，传输快 
let rs = fs.createReadStream("D:\\work\\hj\\Git\\test\\sample.txt");
rs.setEncoding("utf-8");

let data = "";
rs.on('data', function(trunk) {
    data += trunk;
});

rs.on('end', function() {
    console.log(data);
});


//写文件二createWriteStream
let out = fs.createWriteStream('D:\\work\\hj\\Git\\test\\sample.txt');
rs.on('data', function(data) {
    out.write(data);
});

out.on('open', function(fd) {
    console.log("需要被写入的文件已经打开");
})

rs.on('end', function() {
    out.end('再见', function() {
        console.log('文件全部写入完毕');
        console.log('共写入' + out.bytesWritten + '数据');
    })
})