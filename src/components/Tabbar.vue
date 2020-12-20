<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="cluster">分类</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="shopping-cart">购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from "vant";

export default {
  name: "tabbar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  }
};
</script>

<style lang='scss' scoped>
</style>
