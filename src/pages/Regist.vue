<template>
  <div class="regirst">
    <van-nav-bar title="京东注册" left-arrow />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" />
      <van-field v-model="password2" type="password" name="密码" label="确认密码" placeholder="确认密码" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>

    <van-nav-bar
      left-text="返回登录"
      right-text="手机快速注册"
      @click-left="onLogin"
      @click-right="onRegist"
    />
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
  GridItem
} from "vant";
export default {
  name: "login",
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Button.name]: Button,
    [Form.name]: Form,
    [Divider.name]: Divider,
    [VanImage.name]: VanImage,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  mounted() {
    //console.log(NavBar.name);
  },
  data() {
    return {
      username: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    onLogin() {
      this.$router.push("/login");
    },
    onRegist() {
      this.$router.push("/regist");
    },
    onSubmit() {
      let data = {
        username: this.username,
        password: this.password,
        password2: this.password2
      };

      this.$http.userapi.regist(data);
    }
  }
};
</script>

<style lang='scss' scoped>
.regirst {
  width: 100%;
  .van-cell {
    margin: 0.5rem 0;
  }
}
</style>
