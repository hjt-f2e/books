
'use strict';
// nodejs端发送请求
// 使用的是http模块

// 判断是node环境还是浏览器环境
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    console.log('浏览器环境');
    // For browsers use XHR adapter
    //   adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined'
    && Object.prototype.toString.call(process) === '[object process]') {
    console.log('node环境');
    // For node use HTTP adapter
    //   adapter = require('./adapters/http');
  }
  return adapter;
}

getDefaultAdapter();
