<template>
    <div>
        <h2>app1 - Vue</h2>
        <div>
            <button @click="handleClick">改变a</button>
            <span>{{ num }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: undefined,
        };
    },
    mounted() {
        this.$global.onGlobalStateChange((state) => {
            this.num = state.a;
        });
    },
    methods: {
        handleClick() {
            this.$global.setGlobalState({
                a: Math.random() * 1000000,
                b: new Date(),
            });
        },
    },
};
</script>

<style></style>
