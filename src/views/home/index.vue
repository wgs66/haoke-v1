<template>
  <div class="main">
    <div>
      <!-- title -->
      <van-search show-action placeholder="请输入小区或地址" round>
        <template #action>
          <span class="haoke haoke-ditu1"></span>
        </template>
        <template #label>
          <span class="left" @click="$router.push('/city')"
            >地址<van-icon name="arrow-down" />
          </span>
        </template>
      </van-search>
      <!-- 轮播 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#999">
        <van-swipe-item v-for="obj in url" :key="obj.id"
          ><a href="#"><img :src="`${baseURL}${obj.imgSrc}`" alt="" /></a
        ></van-swipe-item>
      </van-swipe>
      <!-- 信息 -->
      <van-grid :border="false">
        <van-grid-item text="整租">
          <template #icon>
            <img src="../../assets/img/all.png" />
          </template>
        </van-grid-item>
        <van-grid-item text="合租">
          <template #icon>
            <img src="../../assets/img/each.png" />
          </template>
        </van-grid-item>
        <van-grid-item text="地图找房">
          <template #icon>
            <img src="../../assets/img/local.png" />
          </template>
        </van-grid-item>
        <van-grid-item text="去出租">
          <template #icon>
            <img src="../../assets/img/rent.png" />
          </template>
        </van-grid-item>
      </van-grid>
      <!-- 租房小组title -->
      <van-cell title="租房小组">
        <span class="cell-span">更多</span>
      </van-cell>
      <!-- 小组list -->
      <div class="last">
        <van-cell class="cellBg" center v-for="item in areas" :key="item.id">
          <template #icon>
            <img :src="`${baseURL}${item.imgSrc}`" alt="" />
          </template>
          <template>
            <span>{{ item.title }}</span>
            <br />
            <span>{{ item.desc }}</span>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { getSwiper, getGroups } from '@/api/home'
export default {
  data() {
    return {
      url: [],
      baseURL: '',
      areas: []
    }
  },
  created() {
    this.getSwip()
    this.getGroups()
  },
  methods: {
    async getSwip() {
      const res = await getSwiper()
      // console.log(res)
      // console.log(res)
      this.url = res.data.body
      this.baseURL = res.config.baseURL

      // console.log(this.baseURL)
      // console.log(this.url)
    },
    async getGroups() {
      const res = await getGroups()
      // console.log(res)
      this.areas = res.data.body
      // console.log(this.areas)
    },
    onSearch() {}
  }
}
</script>

<style scoped lang="less">
.van-search--show-action {
  background-color: transparent;
  z-index: 999;
  position: fixed;
  width: 100%;
  margin-top: 20px;
  font-weight: normal;
  .haoke-ditu1 {
    color: #fff;
    border: 5px solid #fff;
    border-radius: 50%;
    font-size: 40px;
  }
  :deep(.van-field__control) {
    pointer-events: none;
    font-weight: normal;
  }
  .van-icon-arrow-down {
    margin-left: 10px;
    padding-right: 15px;
    margin-right: 10px;
    border-right: 1px solid #ccc;
  }
}
.main {
  background-color: #f6f5f6;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 424px;
    background-color: #39a9ed;
    img {
      width: 100%;
    }
  }

  :deep(.van-grid-item__content) {
    height: 251px;
    .van-grid-item__text {
      font-size: 30px;
      color: #333;
    }
    img {
      height: 120px;
      width: 120px;
    }
  }
  :deep(.van-cell) {
    background-color: transparent;
    font-size: 30px;
    font-weight: 700;

    .cell-span {
      font-weight: normal;
    }
  }
  .cellBg {
    background-color: #fff;
    width: 47%;
    margin-left: 20px;
    margin-bottom: 20px;
    height: 120px;
    border-radius: 10px;
  }
  .last {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 20px;
    img {
      height: 100px;
      margin-left: -20px;
      margin-right: 20px;
    }
    .van-cell {
      font-weight: normal;
      font-size: 28px;
    }
  }
}
</style>
