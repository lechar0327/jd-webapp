<template>
  <div class="home">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-notice-bar
        left-icon="volume-o"
        background="#B20D07"
        color="#fff"
        mode="closeable"
        text="京东618，抢618元大红包！京东购物，更快、更省！"
      />

      <van-search
        v-model="searchValue"
        shape="round"
        background="#B20D07"
        placeholder="请输入搜索关键词"
        show-action
      >
        <template #left>
          <van-icon name="wap-nav" color="#fff" class="wap-nav" size="0.8rem" />
        </template>
        <template #action>
          <router-link class="login" to="/login">登录</router-link>
        </template>
      </van-search>

      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image
            fit="contain"
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            fit="contain"
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            fit="contain"
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            fit="contain"
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg"
          />
        </van-swipe-item>
      </van-swipe>

      <van-divider :style="{ color: '#B20D07', borderColor: '#B20D07', padding: '0 16px' }">为你推荐</van-divider>

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- v-for循环一个数字时，是从1开始 -->
        <div v-for="i in len" :key="i">
          <Good :good="list[2*(i-1)]"></Good>
          <Good :good="list[2*(i-1)+1]"></Good>
        </div>
      </van-list>
    </van-pull-refresh>

    <TabBar></TabBar>
  </div>
</template>

<script>
import {
  NoticeBar,
  NavBar,
  Search,
  Icon,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Divider,
  Grid,
  GridItem,
  PullRefresh,
  List,
  Cell,
  CellGroup
} from "vant";

export default {
  name: "",
  components: {
    TabBar: () => import("@/components/Tabbar.vue"),
    Good: () => import("@/components/Good.vue"),
    [NoticeBar.name]: NoticeBar,
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VanImage.name]: VanImage,
    [Divider.name]: Divider,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      searchValue: "",
      isLoading: false,
      finished: false,
      loading: false,
      list: [],
      page: 1
    };
  },
  computed: {
    len: function() {
      return Math.floor(this.list.length / 2);
    }
  },
  mounted() {
    console.log(NoticeBar);
  },
  methods: {
    onRefresh() {},
    onLoad() {
      let params = {
        hot: true,
        page: this.page,
        size: 10
      };
      this.$http.productapi.getHotGoodList(params).then(res => {
        this.list=res;
      });
    }
  }
};
</script>

<style lang='scss' scope>
.home {
  .login {
    color: #fff;
    font-size: 0.4rem;
  }
  .wap-nav {
    color: #fff;
    margin-left: -0.2rem;
  }

  .van-grid-item__content--surround::after {
    border: 1px solid red;
  }
}
</style>
