<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item icon="wap-home-o" to="/layout">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/selectHome"
        >找房</van-tabbar-item
      >
      <van-tabbar-item icon="newspaper-o" to="/layout/real-time-info"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="contact" to="/layout/my">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
