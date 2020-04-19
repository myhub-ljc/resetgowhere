<template>
  <div class="swiper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgURL" alt="华清宫">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgURL: '//img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_600x330_ddcee9e0.jpg'
        },
        {
          id: '002',
          imgURL: '//img1.qunarzz.com/sight/p0/1505/12/1207d28c272c5864.water.jpg_600x330_1cd283b3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper 
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55%
    background: #ccc
    .swiper-img 
      width: 100%
</style>