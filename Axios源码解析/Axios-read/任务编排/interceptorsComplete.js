/**
 * 任务编排:
 * 1. 实现请求拦截与相应的拦截
 * 2. 怎么利用promise实现
 **/

// axios 任务编排完整版本版本

// 拦截器管理(类似于任务中心)
function InterceptorManager() {
    this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
};
InterceptorManager.prototype.forEach = function forEach(fn) {
    this.handlers.forEach(item => {
        fn(item)
    });
}

const config = { method: 'get', data: { a: 1 }, url: '127.0.0.1:3000/api' };
let promise = Promise.resolve(config);
// 发送请求的逻辑
const dispatchRequest = (config) => {
    console.log ('发送请求', config);
    return config;
};
const chain = [dispatchRequest, undefined];
// 拦截请求
const interceptorsRequest = new InterceptorManager();
interceptorsRequest.use((config) => {
    console.log('拦截请求', config);
    return config;
}, (err) => {
    return Promise.reject(err);
})
// 拦截响应
const interceptorsResponse = new InterceptorManager();
interceptorsResponse.use((config) => {
    console.log('拦截响应', config)
    return config;
}, (err) => {
    return Promise.reject(err);
})
// 任务编排
interceptorsRequest.handlers.forEach(item => {
    chain.unshift(item.fulfilled, item.rejected);
});
interceptorsResponse.handlers.forEach(item => {
    chain.push(item.fulfilled, item.rejected);
});
while(chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
}

