<style lang="less">
page{
  background: #efefef;
  font-size: 30rpx;
  .controlPanel{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
<template>
    <view class='container'>
      <view @tap="changeChart">切换</view>
      <ecCanvas id='mychart-dom-pie' :canvasId.sync='canvasId' :ec.sync='ec'></ecCanvas>
    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import Toast from 'wepy-com-toast'
  import testMixin from '../../mixins/test'
  import EcCanvas from '../../ec-canvas/ec-canvas'
  import * as echarts from '../../ec-canvas/echarts'

  @connect({
    urlPre (state) {
      return state.counter.urlPre
    },
    homeList (state) {
      return state.counter.homeList
    },
    userInfo (state) {
      return state.counter.userInfo
    }
  }, {
  })

  export default class My extends wepy.page {
    config = {
      navigationBarTitleText: '控制面板'
      // usingComponents: {
      //   ec-canvas: '../../ec-canvas/ec-canvas'
      // }
    }
    components = {
      toast: Toast,
      ecCanvas: EcCanvas
    }

    mixins = [testMixin]

    data = {
      canvasId: 'mychart-pie',
      ec: {
        // lazyLoad: true,
        onInit: this.initChart
      },
      idx: 0,
      datas: [[820, 932, 901, 934, 1290, 1330, 1320], [120, 1132, 91, 934, 290, 1330, 320]],
      data1: [820, 932, 901, 934, 1290, 1330, 1320],
      data2: [120, 1132, 91, 934, 290, 1330, 320]
    }

    computed = {
    }

    methods = {
      changeChart () {
        // this.dispose()
        this.initChart()
      }
    }

    // self fn
    initChart(canvas, width, height, datas) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)

      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: datas || [120, 1132, 91, 934, 290, 1330, 320],
          type: 'line'
        }]
      }

      chart.setOption(option)
      return chart
    }
    dispose () {
      if (this.chart) {
        this.chart.dispose()
      }
    }

    events = {
    }

    onLoad() {
    }
  }
</script>
