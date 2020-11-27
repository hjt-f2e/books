<template>
    <div>
        <h2>app1 - Vue</h2>
        <div>
            <el-button type="primary" @click="handleClick1">button</el-button>
            <!-- <button @click="handleClick2">打印window对象</button> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick1() {
            // window.abc = Math.random();
            this.$message({
                message: '123213123',
                duration: 0,
            });
        },
        handleClick2() {
            console.log('app1', window.abc);
        },
    },
};
</script>

<style>
h2 {
    color: red;
}
</style>
