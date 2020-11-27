<template>
    <div>
        <h2>app2 - Vue</h2>
        <div>
            <button @click="handleClick1">app2:修改window对象</button>
            <button @click="handleClick2">app2:打印window对象</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick1() {
            window.abc = Math.floor(Math.random() * 1000000);
        },
        handleClick2() {
            console.log('app2', window.abc);
        },
    },
};
</script>

<style></style>
