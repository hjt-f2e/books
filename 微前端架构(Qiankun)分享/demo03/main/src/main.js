import Vue from 'vue';
import App from './App.vue';
import router from './router';
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
    {
        name: 'app2', // 应用名称
        entry: '//localhost:9002', // 加载的html路径
        container: '#micro-app', // 容器名
        activeRule: '/app2', // 激活的路径
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
        experimentalStyleIsolation: true
    },
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
