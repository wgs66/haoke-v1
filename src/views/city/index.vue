<template>
  <div>
    <div></div>
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />

    <van-index-bar :index-list="indexList">
      <van-index-anchor
        :index="index"
        v-for="(item, index) in list"
        :key="index"
      >
        <span>{{
          firstNameList[item] === 0
            ? `${index}${firstNameList[item].push('暂无城市')}`
            : item
        }}</span>

        <van-cell
          :title="obj"
          v-for="(obj, aindex) in firstNameList[item]"
          :key="aindex"
        ></van-cell>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity, getHot } from '@/api'

export default {
  components: {},
  data() {
    return {
      title: '城市列表',
      areas: [],
      newAreas: [],
      FirstPin: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      firstNameList: {},
      hotList: [],
      indexList: [
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      list: []
    }
  },
  created() {
    this.getCity()
    // this.getHot()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getCity() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await getCity('1')
        // console.log(res)
        this.areas = res.data.body
        // console.log(this.areas)
        // 使用for in 遍历数组
        for (const p in this.areas) {
          // 把每一项的label属性赋值给新数组
          this.newAreas.push(this.areas[p].label)
        }
        // console.log(this.newAreas)

        const pinyin = require('js-pinyin')
        pinyin.setOptions({ checkPolyphone: false, charCase: 0 })

        const firstName = {}
        // 遍历自定义的拼音数组
        this.FirstPin.forEach((item) => {
          // 给存放名字的数组的每一项赋一个空数组 用来存放城市数据
          firstName[item] = []
          // 遍历遍历获取到的城市信息
          this.newAreas.forEach((el) => {
            // 使用插件pinyin内置的getFullChars吧遍历的每一项转化为拼音，并使用substring方法取出转化后拼音的首字母
            const first = pinyin.getFullChars(el).substring(0, 1)
            // 判断自定义的拼音数组 是否等于取出的拼音
            if (first === item) {
              // 如果取出的拼音等于自定义数组内的拼音 就push到存放名字的数组中
              firstName[item].push(el)
            }
          })
        })
        this.firstNameList = firstName

        // console.log(this.firstNameList)
        const res2 = await getHot()
        // console.log(res2)
        this.hotList = res2.data.body
        // console.log(this.hotList)
        for (const key in this.firstNameList) {
          this.list.push(key)
          console.log(key)
        }
        this.list.unshift('hot')
        const tempList = []
        this.hotList.forEach((item) => {
          tempList.push(item.label)
        })
        this.firstNameList.hot = tempList
        console.log(this.list)
      } catch (error) {
        this.$toast.fail('请刷新重试')
      }
    }
    // async getHot() {
    //   // console.log(this.firstNameList)
    //   const res = await getHot()
    //   // console.log(res)
    //   this.hotList = res.data.body
    //   // console.log(this.hotList)
    // }
  }
}
</script>

<style scoped lang="less">
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
    font-size: 35px;
  }
  .van-icon-arrow-left {
    color: #fff;
  }
}
.van-index-bar {
  :deep(.van-index-bar__index) {
    line-height: 40px;
  }
}
</style>
