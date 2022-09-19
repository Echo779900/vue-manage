<template>
  <div id="userLayout">
    <div class="d1">
      <router-link to="/login">登录</router-link>
    </div>
    <div class="d2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#userLayout {
  width: 100%;
  height: 100%;
}
.d1 {
  width: 300px;
  height: 300px;
}
.d2 {
  width: 300px;
  height: 300px;
}
</style>