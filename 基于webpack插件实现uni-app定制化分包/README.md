## ppt
ppt在examples目录下，[打开](./examples/sub-package.html)


## 问题描述

总包体积最小 VS 主包体积最小

## 实现过程

- 文件移动
- 修改json文件中的组件引用路径

## 番外

### webpack loader和plugin有什么区别？

- loader是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程。
- plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务

### webpack plugin运作机制

EventEmitter

#### 钩子类型

- 普通型: 按照注册顺序执行，彼此之间没有强关联
- 流水型: 上一个tap如果有返回值，会作为下一个tap的参数
- 熔断型: 如果有返回值，下面的tap就不会执行



