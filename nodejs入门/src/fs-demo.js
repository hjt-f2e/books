const fs = require('fs');

/**
 * 读文件
 */

 // 方法一
// 打开文件
const fd = fs.openSync('./test.txt', 'r');
// 申请buffer空间
const buff = Buffer.alloc(1024);
// 读取文件句柄
fs.readSync(fd, buff, 0, 1024, null);
// 输出文件
process.stdout.write(buff);
// 关闭文件
fs.closeSync(fd);

// 方法二
const buff2 = fs.readFileSync('./test.txt');
process.stdout.write(buff2);

/**
 * 写文件
 */

// 方法一
// 打开文件
const fd = fs.openSync('./test.txt', 'w');
// 将 “hello node.js” 写入缓冲区
const buff = Buffer.from('hello node.js');
// 再将缓冲写入文件
fs.writeSync(fd, buff);
// 关闭文件
fs.closeSync(fd);

// 方法二
fs.writeFileSync('./test.txt', 'hello node.js');

/**
 * 删除文件
 */
fs.unlinkSync('./test2.txt');
