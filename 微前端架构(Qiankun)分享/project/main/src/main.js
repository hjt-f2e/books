import Vue from 'vue';
import App from './App.vue';
import { registerMicroApps, start } from 'qiankun';
import router from './router';

const apps = [
    {
        name: 'app1', // 应用名称
        entry: '//localhost:9001', // 加载的html路径 https://xxx.xxx.xx
        container: '#micro-app', // 容器名
        activeRule: '/app1', // 激活的路径
        // 传参
        props: {},
    },
    {
        name: 'appreact', // 应用名称
        entry: '//localhost:9002', // 加载的html路径 https://xxx.xxx.xx
        container: '#micro-app', // 容器名
        activeRule: '/appreact', // 激活的路径
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
        // strictStyleIsolation: true,
        // experimentalStyleIsolation: true
    },
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
