<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.img" />
        <div class="item-list">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendList: [
        {
          id: '001',
          img: '//img1.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
          title: '华山景区',
          desc: '只有天在上,更无山与齐'
        },
        {
          id: '002',
          img: '//img1.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
          title: '华山景区',
          desc: '只有天在上,更无山与齐'
        },
        {
          id: '003',
          img: '//img1.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
          title: '华山景区',
          desc: '只有天在上,更无山与齐'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .recommend-title
      line-height: .4rem
      margin-top: .1rem
      background: #eee
      text-indent: .4rem
      font-size: .3rem
    .recommend-item
      overflow: hidden
      display: flex
      .item-img
        width: 2rem
        height: 2rem
        padding: .2rem
      .item-list
        padding: .1rem
        flex: 1
        min-width: 0rem
        .item-title
          line-height: .64rem
          font-size: .32rem
          margin-top: .2rem
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .item-desc
          color: #ccc
          line-height: .44rem
          font-size: .06rem
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .item-btn
          background: #ff9300
          padding: 0 .1rem
          border-radius: .06rem
          margin-top: .16rem
          color: #fff
          height: .4rem
          line-height: .44rem
          text-align: center
</style>