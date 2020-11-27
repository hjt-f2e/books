import Vue from 'vue';
import App from './App.vue';
import { registerMicroApps, start } from 'qiankun';

const apps = [
    {
        name: 'app1', // 应用名称
        entry: '//localhost:9001', // 加载的html路径 https://xxx.xxx.xx
        container: '#micro-app', // 容器名
        activeRule: '/page1', // 激活的路径
        // 传参
        props: {},
    },
];

registerMicroApps(apps, {
    beforeLoad() {
        console.log('beforeLoad');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    afterMount() {
        console.log('afterMount');
    },
}); // 注册应用
start();

new Vue({
    render: (h) => h(App),
}).$mount('#app');
