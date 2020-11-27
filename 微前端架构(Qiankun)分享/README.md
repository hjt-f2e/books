# 微前端架构分享

[toc]

## 什么是微前端

### 微服务架构

> 微服务是面向服务架构（SOA）的一种变体，把应用程序设计成一系列**松耦合**的细粒度服务，并通过轻量级的通信协议**组织**起来。
> 具体地，将应用构建成一组小型服务。这些服务都能够独立部署、独立扩展，每个服务都具有稳固的模块边界，甚至允许使用不同的编程语言来编写不同服务，也可以由不同的团队来管理

### 微前端架构

微前端由微服务架构演变而来

> 一种由独立交付的**多个前端应用**组成**整体**的架构风格。
> 具体的，将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的小块，而在用户看来仍然是内聚的单个产品。

---

## 微前端要解决什么问题

任何新技术的产生都是为了解决现有场景和需求下的技术痛点

1. **拆分和细化**: 当下前端领域，单页面应用（SPA）是非常流行的项目形态之一，而随着时间的推移以及应用功能的丰富，单页应用变得不再单一而是越来越庞大也越来越难以维护，往往是改一处而动全身，由此带来的发版成本也越来越高。微前端的意义就是将这些庞大应用进行拆分，并随之解耦，每个部分可以单独进行维护和部署，提升效率。

2. **整合历史系统**: 在不少的业务中，或多或少会存在一些历史项目，这些项目大多以采用老框架的B端管理系统为主，介于日常运营，这些系统需要结合到新框架中来使用还不能抛弃，对此我们也没有理由浪费时间和精力重写旧的逻辑。而微前端可以将这些系统进行整合，在基本不修改原来逻辑的同时来同时兼容新老两套系统并行运行。

> 微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个**巨石应用**后，随之而来的应用不可**维护**的问题。这类问题在企业级 Web 应用中尤其常见。

### 为什么需要微前端

前端越来越重:

- 代码库庞大
- 开发人员多
- 打包后的代码也很庞大

前端越来越复杂:

- 层出不穷的框架、类库
- 各种各样的工程化体系

**需要一种分解复杂度、提升协作效率、支持灵活扩展的架构模式**

---

## 微前端的优点

- 技术栈无关
主框架不限制接入应用的技术栈，微应用具备完全自主权

- 独立开发、独立部署
微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

- 增量升级
在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

- 独立运行时
每个微应用之间状态隔离，运行时状态不共享

总结: 简而言之，微前端就是将大而恐怖的东西切成更小、更易于管理的部分，然后明确地表明它们之间的依赖性。我们的技术选择，我们的代码库，我们的团队以及我们的发布流程都应该能够彼此独立地操作和发展，无需过多的协调。

---

## 微前端的缺点

- 下载量大: 独立构建可能会导致重复得依赖，从而增加用户的下载量。
- 环境差异: 当微应用越来越多，你在本地开发时肯定无法把所有微应用和对应的后端都启动起来。
- 治理复杂性: 微前端作为一个更加分布式的体系结构，将不可避免地要管理更多的东西：更多的代码库、更多的工具、更多的构建管道、更多的服务器、更多的域名等。

1. 体验有所折损
2. 维护成本高
3. 管理版本复杂、依赖复杂
4. 开发体验不太友好
5. 粒度不宜太小

---

## 目前微前端有哪些框架

1. Bit
2. Webpack 5 和 Module Federation
3. Single SPA
4. SystemJS
5. Piral
6. OpenComponent
7. **Qiankun**
8. Luigi
9. FrintJS
10. Mosaic
11. PuzzleJS

可以去这篇文章了解他们的特性[你必须知道的11个微前端框架](https://mp.weixin.qq.com/s/gtyD1v6UiIWyDV949KePVQ)

---

## 为什么不用 iframe

1. url不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用
2. UI不同步，DOM结构不共享。iframe区域内弹窗遮罩不能覆盖外面iframe以外的区域
3. 全局上下文完全隔离，内存变量不共享。cookie传递问题
4. 慢。每次进入新的iframe都是浏览器的上下文重建、资源重新加载的过程

其实主要问题是使用iframe会带来非常严重的体验问题。

---

## 使用Qiankun

- 主要使用的思路: 

在主应用中**注册子应用**，子应用需要**暴露Qiankun定义的生命周期**方法。

在加载页面时，Qiankun会去加载资源，根据约定拿到方法（子应用通过webpack以**umd**的形式来输出，并且要支持**跨域**）。

在执行时会将window对象绑定到一个Proxy对象上，以防污染全局变量

> UMD（Universal Module Definition）是AMD和CommonJS的糅合，跨平台的解决方案。UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。

### 关键代码

#### 主应用:

1. 安装 Qiankun

```
yarn add qiankun
or
npm install qiankun -S
```

2. 引入使用

```js
import { registerMicroApps, start } from 'qiankun';

const apps = [
    {
        name: 'app1', // 应用名称
        entry: '//localhost:9001', // 加载的html路径
        container: '#micro-app', // 容器名
        activeRule: '/app1', // 激活的路径
         // 传参
        props: {}
    },
];

registerMicroApps(apps, {
    beforeLoad() {},
    beforeMount() {},
    afterMount() {}
}); // 注册应用
start();
```

3. 添加承载子应用的dom

```
<div id="#micro-app"></div>
```

#### 子应用:

入口输出生命周期钩子
```js

if (!window.__POWERED_BY_QIANKUN__) {
    // 不在微前端架构中，独立启动
    render();
}

// 生命周期
export async function bootstrap (props) {
    // 启动
    console.log('bootstrap props', props);
}

export async function mount (props) {
    // 挂载
    console.log('mount props', props);
    render(props);
}

export async function unmount () {
    // 销毁
}
```

- 其他配置:

1. 子应用开启跨域
2. webpack 输出 umd 形式

```js
    devServer: {
        port: 9001,
        // 必须开启允许跨域
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    },
    configureWebpack: {
        output: {
            library: 'app1',
            libraryTarget: 'umd' // 必须打包成umd格式
        }
    }
```

---

## 写点demo尝鲜

### 1.最简单的主应用+子应用(demo01)

### 2.接入一个其他技术栈的子应用(demo02)

- react子应用配置注意:

先eject再配置:

创建.env文件配置端口
```
PORT=9002
WDS_SOCKET_PORT=9002
```

- vue3子应用注意:

只支持webpack构建vue3接入，暂时不支持vite构建接入

### 3.跳转应用(demo02)

1. 使用 \<a\> 标签：页面会刷新
2. 使用框架路由：页面不会刷新

进入后跳转默认应用，可使用qiankun提供的API

setDefaultMountApp('/homeApp');

也可使用框架路由来跳转

### 4.样式隔离(demo03)

1. shadowDOM 严格隔离

```js
start({
    sandbox: {
        strictStyleIsolation: true
    }
});
```

*需要注意挂载的DOM要从props.container中去拿

2. 对子应用增加样式前缀

```js
start({
    sandbox: {
        experimentalStyleIsolation: true
    }
});
```

### 5.js的隔离(demo04)

window 对象互不影响

### 6.应用间通信(demo05)

- initGlobalState(state)

主应用
```js
import { initGlobalState } from 'qiankun';

const initialState = {
    // 初始化state
};
const actions = initGlobalState(initialState);

export default actions;

```

子应用
```js
// 接收
export async function mount(props) {
    console.log('mount props', props);
    const { onGlobalStateChange, setGlobalState } = props;
    Vue.prototype.$global = {
        onGlobalStateChange,
        setGlobalState,
    };
    render(props);
}

// 使用
// 1.监听
this.$global.onGlobalStateChange((state, prev) => {}, immediately? :boolean);
// 2.修改
this.$global.setGlobalState({});
```

注意： 子应用只能改变 initGlobalState 中声明的变量，主应用可以改变 initGlobalState 中未声明的变量

### 7.引入UI库(demo06)

- element-ui

1. 安装
```
yarn add element-ui
or
npm install element-ui -S
```

2. 引入
```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

- ant-design-vue

1. 安装
```
yarn add ant-design-vue
or
npmr install ant-design-vue -S
```

2. 引入
```js
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

vue.use(Antd);
```

#### 坑1: 字体文件，大图片无法加载

原因是 qiankun 将外链样式改成了内联样式，但是字体文件和背景图片的加载路径是相对路径。

配置vue.config.js

```js
module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('fonts')
            .use('url-loader')
            .loader('url-loader')
            .options({})
            .end();
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .options({})
            .end();
    },
}
```

---

## 源码分析

### js沙箱如何实现(demo07)

porxy 代理 window
```js
// 存放新增的初始值
export const addedPropsMap = new Map();

// 存放改变前的初始值
export const modifyPropsMap = new Map();

// 存放改变后当前的值
export const currentUpdatedPropsMap = new Map();

const rawWindow = window;
const fakeWindow = Object.create(null);

const proxy = new Proxy(fakeWindow, {
    set(_, p, value) {
        console.log('set', p, value);
        if (!rawWindow.hasOwnProperty(p)) {
            // 如果window对象中没有该属性，则存放到新增Map
            addedPropsMap.set(p, value);
        } else if (!modifyPropsMap.has(p)) {
            // 如果window对象中有该属性，但是“改变前初始值”Map中没有，记录初始值
            const originalValue = rawWindow[p];
            modifyPropsMap.set(p, originalValue);
        }

        // 存放当前改变的值
        currentUpdatedPropsMap.set(p, value);

        rawWindow[p] = value;
        return true;
    },
    get(_, p) {
        console.log('get', p);
        const value = rawWindow[p];
        return value;
    },
    has(_, p) {
        return p in rawWindow;
    },
});

export default proxy;

```

装入沙箱

```js
import proxy, {
    addedPropsMap,
    modifyPropsMap,
    currentUpdatedPropsMap,
} from './proxyWindow';

(function (window) {
    window.a = 12;
    window.fetch = null;

    console.log('add', addedPropsMap, 'modify',modifyPropsMap, 'current', currentUpdatedPropsMap);
})(proxy);
```

## 参考文献

[微前端到底是什么](https://zhuanlan.zhihu.com/p/96464401)

[你必须知道的11个微前端框架](https://mp.weixin.qq.com/s/gtyD1v6UiIWyDV949KePVQ)

[如何设计实现微前端框架-qiankun](https://mp.weixin.qq.com/s/IuazLgiywTcOZ4UezFUCjg)

[微前端-最容易看懂的微前端知识](https://juejin.im/post/6844904162509979662)

[微前端入门](https://juejin.im/post/6844903953734336525)

[AMD, CMD, CommonJS, ES Module, UMD](https://juejin.im/post/6844903663404580878)

[微前端完整解读 —— 场景分析及 Qiankun 原理介绍](https://juejin.im/post/6847902222525661197#heading-5)

[为什么不用Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)

[QiankunAPI](https://qiankun.umijs.org/zh/guide)

[Qiankun源码解析](https://github.com/a1029563229/blogs/blob/master/Source-Code/qiankun/1.md)
