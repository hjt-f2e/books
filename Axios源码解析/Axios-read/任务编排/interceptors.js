/**
 * 任务编排:
 * 1. 实现请求拦截与相应的拦截
 * 2. 怎么利用promise实现
 **/

// axios 任务编排简介版本

const config = { method: 'get', data: { a: 1 }, url: '127.0.0.1:3000/api' };
let promise = Promise.resolve(config);
// 拦截请求
const interceptorsRequest = (config) => {
    console.log('拦截请求', config);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(22222);
            resolve('拦截请求222');
        }, 2000);
    });
}
// 发送请求的逻辑
const dispatchRequest = (config) => {
    console.log ('发送请求', config);
    return config;
};
// 拦截响应
const interceptorsResponse = (config) => {
    console.log('拦截响应', config)
    return config;
}

const chain = [interceptorsRequest, dispatchRequest, interceptorsResponse];
while(chain.length) {
    promise = promise.then(chain.shift(), undefined);
}

