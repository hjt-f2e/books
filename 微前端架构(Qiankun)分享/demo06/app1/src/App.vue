<template>
    <div>
        <h2>app1 - Vue</h2>
        <el-button icon="el-icon-delete" type="primary" @click="handleClick"
            >按钮</el-button
        >
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$message({
                message: '123',
                duration: 0,
            });
        },
    },
};
</script>

<style></style>
