<template>
  <div>
    <van-nav-bar title="购物车" left-arrow />
  </div>
</template>

<script>
import {
  NavBar,
  Field,
  Button,
  Form,
  Divider,
  Image as VanImage,
  Grid,
  GridItem,
  Toast
} from "vant";

export default {
  name: "cart",
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Button.name]: Button,
    [Form.name]: Form,
    [Divider.name]: Divider,
    [VanImage.name]: VanImage,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Toast.name]: Toast
  }
};
</script>

<style lang='scss' scoped>
</style>
