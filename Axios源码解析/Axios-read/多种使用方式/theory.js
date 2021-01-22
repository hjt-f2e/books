'use strict';
// 简易原理
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
}

Axios.prototype.request = function request(config) {
  console.log(config);
};

['delete', 'get', 'head', 'options', 'post', 'put', 'patch']
    .forEach(method => {
        Axios.prototype[method] = function(url, data, config) {
            console.log(method, url, data, config);
        }
    })

// 多种用法原理
function isArray(val) {
    return toString.call(val) === '[object Array]';
}

function forEach(obj, fn) {
    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    if (typeof obj !== 'object') {
        obj = [obj];
    }

    if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    } else {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}

function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
            a[key] = val.bind(thisArg);
        } else {
            a[key] = val;
        }
    });
    return a;
}

function createInstance(config) {
    var context = new Axios(config);
    
    var instance = Axios.prototype.request.bind(context);
    // 将原型上的方法赋给instance
    extend(instance, Axios.prototype, context);
    // 将构造器上的属性赋给instance
    extend(instance, context);
    return instance;
}

var axios = createInstance();
axios.get('test',{ a: 1})
axios({ url: 'test', method: 'get', data: { a: 1} })

