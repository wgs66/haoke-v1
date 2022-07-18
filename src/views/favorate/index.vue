<template>
  <div>
    <!-- Header -->
    <div class="header">
      <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- main -->
    <div class="big" v-for="obj in Favorites" :key="obj.houseCode">
      <van-row class="rwo1">
        <van-col span="8"
          ><van-image
            width="106"
            height="80"
            :src="`${baseUrl}${obj.houseImg}`"
        /></van-col>
        <van-col span="16">
          <van-row class="row2">
            <span class="span1">{{ obj.title }}</span>
            <span class="span2">{{ obj.desc }}</span>
            <van-tag type="success">{{ obj.tags[0] }}</van-tag>
            <span class="span3"> {{ obj.price }} <i>元/月</i></span>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getFavorites } from '@/api/user.js'
export default {
  data() {
    return {
      Favorites: [],
      baseUrl: ''
    }
  },
  created() {
    this.getFavorites()
  },
  components: {},
  methods: {
    async getFavorites() {
      const res = await getFavorites()
      console.log(res)
      this.Favorites = res.data.body
      this.baseUrl = res.config.baseURL
      console.log(this.baseUrl)
      console.log(this.Favorites)
    },
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
/deep/.header {
  .van-nav-bar__content {
    background-color: #21b97a;
    width: 100%;
    .van-nav-bar__left {
      color: #fff;
      .van-icon {
        color: #fff;
      }
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
.big {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
  .rwo1 {
    height: 180px;
  }
  :deep(.van-image__img) {
    height: 100%;
  }
  .row2 {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    justify-content: space-between;
    height: 180px;
  }
  .span1 {
    font-weight: 700;
  }
  .span2 {
    color: #afb2b3;
  }
  .van-tag--success {
    text-align: center;
    width: 80px;
    padding: 4px 4px 2px 10px;
    color: #39becd;
    background: #e1f5f8;
  }
  .span3 {
    font-weight: 700;
    color: red;
    i {
      font-size: 25px;
      font-style: normal;
    }
  }
}
</style>
