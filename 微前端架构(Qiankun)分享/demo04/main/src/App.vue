<template>
    <div>
        <h2>app - Vue</h2>
        <div>
            <router-link to="/app1">app1</router-link>
            <router-link to="/app2">app2</router-link>
        </div>
        <div>
            <button @click="handleClick1">main:修改window对象</button>
            <button @click="handleClick2">main:打印window对象</button>
        </div>
        <hr />
        <div class="bd" id="micro-app"></div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick1() {
          window.abc = Math.floor(Math.random() * 1000000);
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
