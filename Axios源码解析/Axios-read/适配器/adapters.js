// xhr适配器做了哪些市
/**
 * 1. 处理Content-Type字段
 * 2. auth字段
 * 3. baseURL与url的拼接
 * 4. 超时设置
 * -----config----
 * 5. XMLHttpRequest发送请求
 * 
 */

 // XMLHttpRequest发送请求的步骤
 var request = new XMLHttpRequest();

 request.timeout = 2000;

 // 第三个参数是是否开启异步执行操作 发送请求
 request.open(method, url, true);

 request.onreadystatechange = function handleLoad() {
    if (!request || request.readyState !== 4) {
        return;
    }

    if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
    }

    // .....处理返回内容....

    var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
    };

    // 返回请求成功后的数据
    settle(resolve, reject, response);

    // Clean up request
    request = null;
 };

 request.onabort = function handleAbort() {
    // .....请求中断的处理....
    reject
 }

 request.onerror = function handleError() {
    // .....请求出错的处理....
    reject
 };

 request.ontimeout = function handleTimeout() {
    // .....请求超时的处理....
    reject
 };

// 下载数据的进度
if (typeof config.onDownloadProgress === 'function') {
    request.addEventListener('progress', config.onDownloadProgress);
}

// Not all browsers support upload events 上传的进度
if (typeof config.onUploadProgress === 'function' && request.upload) {
    request.upload.addEventListener('progress', config.onUploadProgress);
}

// 取消请求的操作
if (config.cancelToken) {
    // Handle cancellation
    config.cancelToken.promise.then(function onCanceled(cancel) {
      if (!request) {
        return;
      }

      request.abort();
      reject(cancel);
      // Clean up request
      request = null;
    });
  }

 request.send(requestData);
