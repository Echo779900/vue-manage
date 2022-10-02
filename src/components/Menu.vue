<template>
  <el-menu mode="vertical" default-active="1">
      <el-menu-item index="1">
        <span slot="title">
            <router-link to="/monitor">
                动态监控
            </router-link>
        </span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">
            <router-link to="/task">
                任务中心
            </router-link>
        </span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <span>管理中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link to="/device">
                设备管理
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  </el-menu>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>

</style>