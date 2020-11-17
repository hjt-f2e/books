const path = require('path');

console.log(__dirname); // /Users/denglei/Workspace/node_learn
console.log(__filename); // /Users/denglei/Workspace/node_learn/path-demo.js

const nowDirPath = path.resolve(__dirname);
console.log(nowDirPath); // /Users/denglei/Workspace/node_learn

const nowFilePath = path.resolve(__filename);
console.log(nowFilePath); // /Users/denglei/Workspace/node_learn/path-demo.js

const joinRes = path.join(__dirname, __filename);
console.log(joinRes);   // /Users/denglei/Workspace/node_learn/Users/denglei/Workspace/node_learn/path-demo.js

const parser = path.parse(__filename);
console.log(parser);
// {
//     root: '/', 根路径
//     dir: '/Users/denglei/Workspace/node_learn', 从根路径开始的文件夹路径
//     base: 'path-demo.js', 文件名 + 扩展名
//     ext: '.js', 文件扩展名
//     name: 'path-demo' 文件名
// }