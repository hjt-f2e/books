<template>
    <div>
        <h2>app - Vue</h2>
        <div>
            <div>
              <span>普通a标签跳转: </span>
              <a href="/app1">app1</a>
              <a href="/app2">app2</a>
            </div>
            <div>
              <span>router-link跳转: </span>
              <router-link to="/app1">app1</router-link>
              <router-link to="/app2">app2</router-link>
            </div>
        </div>
        <div class="bd" id="micro-app"></div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.bd {
    border: 1px solid #ccc;
}
</style>
