// pronise的链式调用
'use strict';
Promise.resolve(1).then(function(e) {
  console.log(e, '请求拦截');
  return 2;
}).then(function(e) {
  console.log(e, '正式请求');
  return 3;
}).then(function(e) {
  console.log(e, '响应拦截');
});
