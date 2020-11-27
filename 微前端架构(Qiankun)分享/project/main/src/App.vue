<template>
    <div>
        <h2>app - Vue</h2>
        <div>
            <a href="/app1">app1</a>
            <a href="/appreact">appreact</a>
        </div>
        <div>
            <router-link to="/app1">app1</router-link>
            <router-link to="/appreact">appreact</router-link>
        </div>
        <div>
            <button @click="handleClick1">设置window对象</button>
            <button @click="handleClick2">打印window对象</button>
        </div>
        <div class="bd" id="micro-app"></div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick1() {
          window.abc = Math.random();
        },
        handleClick2() {
          console.log('main', window.abc);
        },
    },
};
</script>

<style>
.bd {
    border: 1px solid #ccc;
    padding: 20px;
}
</style>
