import Vue from 'vue';
import App from './App.vue';

import { registerMicroApps, start } from 'qiankun';

const apps = [
    {
        name: 'app1', // 应用名称
        entry: '//localhost:9001', // 加载的html路径
        container: '#micro-app', // 容器名
        activeRule: '/app1', // 激活的路径
        // 传参
        props: {},
    },
];

registerMicroApps(apps, {
    beforeLoad() {},
    beforeMount() {},
    afterMount() {},
}); // 注册应用
start({
  sandbox: {
    // experimentalStyleIsolation: true
  }
});

new Vue({
    render: (h) => h(App),
}).$mount('#app');
