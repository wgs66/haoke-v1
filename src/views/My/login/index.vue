<template>
  <div>
    <!-- header -->
    <van-nav-bar title="账号登录" left-arrow @click-left="backToPage" />

    <!-- main -->
    <van-form class="form" @submit="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="usernameRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="passwordRules"
      />
      <div class="btn">
        <van-button block type="info" native-type="submit" color="#21b97a"
          >登录</van-button
        >
      </div>
    </van-form>
    <!-- footer -->
    <div class="toZc">
      <a href="javascript:;">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { usernameRules, passwordRules } from './rules'
import { login } from '@/api/user'
export default {
  data() {
    return {
      username: '',
      password: '',
      token: '',
      usernameRules,
      passwordRules
    }
  },

  methods: {
    backToPage() {
      this.$router.back()
    },
    async login() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        if (res.data.status === 200) {
          console.log(res)
          this.$toast.success(res.data.description)
          this.$store.commit('SET_Token', res.data.body)
          this.backToPage()
        } else {
          this.$toast.fail(res.data.description)
          // console.log(res)
        }
      } catch (e) {
        console.log(e.message)
        this.$toast.fail('登录失败！')
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #21b97a;
  height: 90px;
  :deep(.van-nav-bar__title) {
    font-size: 38px;
    color: #fff;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
.form {
  padding-top: 50px;
  font-size: 38px;

  :deep(.van-field__value) {
    line-height: 80px;
    font-size: 36px;
  }
  .btn {
    padding-top: 40px;
  }
  .van-button--block {
    width: 90%;
    margin: 0 auto;
    height: 100px;
    font-size: 32px;
  }
}
.toZc {
  margin-top: 40px;
  text-align: center;
  font-size: 30px;
  a {
    color: #666666;
  }
}
</style>
