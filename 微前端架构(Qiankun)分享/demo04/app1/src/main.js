import Vue from 'vue';
import App from './App.vue';

function render() {
    new Vue({
        render: (h) => h(App),
    }).$mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    // 不在微前端架构中，独立启动
    render();
}

// 生命周期
export async function bootstrap(props) {
    // 启动
    console.log('bootstrap props', props);
}

export async function mount(props) {
    // 挂载
    console.log('mount props', props);
    render(props);
}

export async function unmount() {
    // 销毁
}
