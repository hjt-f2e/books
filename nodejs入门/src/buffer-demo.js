// 初始化一个 “hello node.js” buffer
const buff = Buffer.from('hello node.js');

// 创建一个 1KB 的 buffer
const buff2 = Buffer.alloc(1024);
// 向 buffer 内写入 “hello node.js”
buff2.write('hello node.js');

// 创建一个 1KB 的 不安全buffer
const buff3 = Buffer.allocUnsafe(1024);
buff3.write('hello node.js');

process.stdout.write(buff); // hello node.js
process.stdout.write(buff2); // hello node.js
process.stdout.write(buff3); // hello node.js（后面还可能带有一下未知的数据）