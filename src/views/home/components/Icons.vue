<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.img"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        {
          id: '001',
          img: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '002',
          img: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '003',
          img: '//s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        },
        {
          id: '004',
          img: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '005',
          img: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '006',
          img: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          desc: '海外酒店'
        },
        {
          id: '007',
          img: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
          desc: '汽车票船票'
        },
        {
          id: '008',
          img: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
          desc: '自由行'
        },
        {
          id: '009',
          img: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
          desc: '民宿客栈'
        },
        {
          id: '010',
          img: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
          desc: '专车自驾'
        },
        {
          id: '011',
          img: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png',
          desc: '赚钱'
        },
        {
          id: '012',
          img: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
          desc: '旅游团购'
        },
        {
          id: '013',
          img: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
          desc: '一日游'
        },
        {
          id: '014',
          img: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png',
          desc: '特惠酒店'
        },
        {
          id: '015',
          img: 'https://picbed.qunarzz.com/799d9d090d1625a854194460c8849fee.png',
          desc: '邮轮'
        },
        {
          id: '016',
          img: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png',
          desc: '周边短途'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]) {
          pages[page] = []
      }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/varibles.styl'
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
  .icon 
    position: relative
    float: left
    overflow: hidden
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      border-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        height: 100%
        margin: 0 auto
    .icon-desc 
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      overflow: hidden
      white-space: nowrap 
      text-overflow: ellipsis
</style>