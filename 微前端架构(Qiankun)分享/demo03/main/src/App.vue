<template>
    <div>
        <h2>app - Vue</h2>
        <div class="color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates mollitia eius dolores, sunt corrupti dolorum sapiente commodi nam suscipit iste temporibus natus, sed, eaque facilis maiores architecto consequuntur facere!
        </div>
        <div>
            <router-link to="/app1">app1</router-link>
            <router-link to="/app2">app2</router-link>
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
    padding: 20px;
}
.color {
  color: red;
}
</style>
