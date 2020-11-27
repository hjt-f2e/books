<template>
    <div>
        <h2>app - Vue</h2>
        <div>
            <button @click="handleClick">改变a</button>
            <span>
                {{ num }}
            </span>
        </div>
        <div class="bd" id="micro-app"></div>
    </div>
</template>

<script>
import action from './globalState';
export default {
    data() {
        return {
            num: undefined,
        };
    },
    mounted() {
        action.onGlobalStateChange((state) => {
            console.log(state);
            this.num = state.a;
        }, true);
    },
    methods: {
        handleClick() {
            action.setGlobalState({
                a: Math.random(),
            });
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
