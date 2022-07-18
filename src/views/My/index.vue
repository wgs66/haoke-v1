<template>
  <div>
    <!--------------------------------- bg ---------------------------->

    <div v-if="isLogin">
      <div class="bg">
        <img src="@/assets/img/bg.png" alt="" />
      </div>
      <div class="main">
        <div class="mask1">
          <div class="imgs">
            <img src="@/assets/img/avatar.png" alt="" />
          </div>
          <p>游客</p>
          <button @click="toLogin" class="toLogin">去登录</button>
        </div>
        <div class="mask2">
          <van-grid :border="false" icon-size="22px" clickable>
            <van-grid-item icon="star-o" text="我的收藏" @click="toFavorate" />
            <van-grid-item icon="wap-home-o" text="我的出租" @click="toRent" />
            <van-grid-item icon="clock-o" text="看房记录" />
            <van-grid-item icon="debit-pay" text="成为房主" />
            <van-grid-item text="个人资料"
              ><template #icon>
                <span class="haoke haoke-31wode"></span>
              </template>
            </van-grid-item>
            <van-grid-item icon="service-o" text="联系我们" />
          </van-grid>
        </div>
        <div class="mask3">
          <img src="@/assets/img/join.png" alt="" />
        </div>
      </div>
    </div>
    <!-- ============================================================= -->
    <div v-else>
      <div class="bg2">
        <img src="@/assets/img/avatar2.png" alt="" />
      </div>
      <div class="main">
        <div class="mask1-1">
          <div class="imgs">
            <img
              :src="usersInfo.avatar ? `${baseUrl}${usersInfo.avatar}` : ''"
              alt=""
            />
          </div>
          <p>{{ usersInfo.nickname }}</p>
          <button @click="toExit" class="toLogin">退出</button>
          <div class="dif">
            <a href="javascript:;">编辑个人资料</a
            ><van-icon name="play" color="#999" />
          </div>
        </div>
        <div class="mask2">
          <van-grid :border="false" icon-size="22px" clickable>
            <van-grid-item icon="star-o" text="我的收藏" @click="toFavorate" />
            <van-grid-item icon="wap-home-o" text="我的出租" @click="toRent" />
            <van-grid-item icon="clock-o" text="看房记录" />
            <van-grid-item icon="debit-pay" text="成为房主" />
            <van-grid-item text="个人资料"
              ><template #icon>
                <span class="haoke haoke-31wode"></span>
              </template>
            </van-grid-item>
            <van-grid-item icon="service-o" text="联系我们" />
          </van-grid>
        </div>
        <div class="mask3">
          <img src="@/assets/img/join.png" alt="" />
        </div>
      </div>
    </div>

    <!-- ---------------------------------------------------------------------- -->
  </div>
</template>

<script>
import { removeToken } from '@/utils'
import { userInfo } from '@/api/user'
export default {
  data() {
    return {
      baseUrl: '',
      usersInfo: []
    }
  },
  computed: {
    isLogin() {
      return !this.$store.state.user.token
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ path: '/login' })
    },
    toExit() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认退出？'
        })
        .then(() => {
          removeToken()
          this.$store.commit('SET_Token', {})
        })
        .catch(() => {})
    },
    async getUserInfo() {
      if (!this.isLogin) {
        const res = await userInfo(this.$store.state.user.token)
        console.log(res)
        this.baseUrl = res.config.baseURL
        // console.log(this.baseUrl)
        this.usersInfo = res.data.body
        // console.log(this.usersInfo)
      }
    },
    toFavorate() {
      this.$router.push({ path: '/favorate' })
    },
    toRent() {
      this.$router.push({ path: '/rent' })
    }
  },
  created() {
    this.getUserInfo()
  }
}
</script>

<style scoped lang="less">
.bg {
  width: 100%;
  height: 400px;

  img {
    width: 100%;
  }
}
.bg2 {
  width: 100%;
  height: 400px;

  img {
    width: 100%;
  }
}
.main {
  // background-color: pink;
  height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: -190px;
  .mask1 {
    height: 300px;
    width: 85%;
    background-color: #fff;
    text-align: center;
    font-size: 18px;
    position: relative;
    box-shadow: 0 0 50px #dedede;
    .toLogin {
      font-size: 25px;
      background-color: #21b97a;
      border: none;
      color: #fff;
      border-radius: 10px;
      padding: 12px 26px;
    }
    .imgs {
      position: fixed;
      left: 41%;
      margin-top: -80px;
      height: 120px;
      width: 120px;
      border: 12px solid #f5f5f5;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin-top: 90px;
      margin-bottom: 40px;
    }
  }
  .mask1-1 {
    height: 400px;
    width: 85%;
    background-color: #fff;
    text-align: center;
    font-size: 18px;
    position: relative;
    box-shadow: 0 0 50px #dedede;
    margin-bottom: -18px;
    z-index: 999;
    .dif {
      margin-top: 30px;
      a {
        color: #666;
      }
    }
    .toLogin {
      font-size: 25px;
      background-color: #21b97a;
      border: none;
      color: #fff;
      border-radius: 10px;
      padding: 12px 26px;
    }
    .imgs {
      position: fixed;
      left: 41%;
      margin-top: -80px;
      height: 120px;
      width: 120px;
      border: 12px solid #f5f5f5;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin-top: 90px;
      margin-bottom: 40px;
    }
  }
  .mask2 {
    margin-top: -80px;
    width: 100%;
    height: 350px;
    .van-grid-item {
      flex-basis: 33% !important;
      color: #333333;
    }
    .haoke {
      font-size: 50px;
      color: #000052;
      display: inline-block;
      margin-bottom: 10px;
    }
  }
  .mask3 {
    height: 160px;
    width: 90%;
    margin-top: -110px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
