<template>
  <div>
    <van-image width="100%" height="300" :src="imgsrc" />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Image as VanImage
} from "vant";
export default {
  name: "detail",
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [VanImage.name]: VanImage
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imgsrc: ""
    };
  },
  mounted() {
    let params = {
      good_id: this.id
    };

    this.$http.productapi.getGoodDetail(params).then(res => {
      this.imgsrc = res.img;
    });
  },
  methods: {
    addCart() {
        
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
