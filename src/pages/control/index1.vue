<style lang="less">
page{
  background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);
  .controlWrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .TabBox{
    width: 600rpx;
    height: 50rpx;
    margin: 0 auto 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #3498db;
    border-top-left-radius: 20rpx;
    border-bottom-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
    overflow: hidden;
  }
  .TabItem{
    width: 200rpx;
    text-align: center;
    padding: 0 10px;
    height: 100%;
    line-height: 50rpx;
    font-size: 30rpx;
  }
  .Active{
    background: #3498db;
    color: #fff;
  }
  ec-canvas {
    width: 100%;
    height: 750rpx;
  }
  .ArrowDown{
      width: 100%;
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      bottom: 0;
      image{
        width: 80rpx;
        height: 80rpx;
        transform: rotate(180deg);
        display: block;
      }
    }
    .ArrowUp{
      width: 100%;
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      bottom: 0;
      image{
        width: 80rpx;
        height: 80rpx;
        display: block;
      }
    }
}
</style>
<template>
    <view class='controlWrap'>
    <text>{{CurTab}}</text>
    <controlPanelLight wx:if="{{!ifShowChart}}"></controlPanelLight>
    <view class='TabBox'>
      <view class="{{CurTab == TabIdx?'TabItem Active':'TabItem'}}" @tap='changeChart({{TabIdx}})' wx:for-items="{{TabMenu}}" wx:for-index="TabIdx" wx:for-item="Tab" wx:key="TabIdx">{{Tab}}</view>
    </view>
    <view style="width:750rpx;height:700rpx;" hidden="{{!ifShowChart}}">
      <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>
    </view>
     <!--  <button @tap="changeChart(0)">切换1</button>
      <button @tap="changeChart(1)">切换2</button>
      <button @tap="dispose">释放图表</button>
      <view wx:if="{{ifShowChart}}">
        <view style="width:750rpx;height:700rpx;background:#fff;" hidden="{{isDisposed}}">
          <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>
        </view>
      </view> -->
      <!--ArrowDown  -->
      <view wx:if="{{!ifShowChart}}" class='ArrowDown'>
        <image bindtap='ToggleShowChart' src='../../images/icons/double-arrow-down.png'></image>
      </view>
        <!--ArrowUp  -->
      <view wx:if="{{ifShowChart}}" class='ArrowUp'>
        <image bindtap='ToggleShowChart'  src='../../images/icons/double-arrow-down.png'></image>
      </view>
    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import Toast from 'wepy-com-toast'
  import testMixin from '../../mixins/test'
  import * as echarts from '../../ec-canvasyl/echarts'
  import controlPanelLight from '../../components/controlPanel/controlPanel_light'

  function setOption (chart, IDX) {
    console.log('chart-------------')
    console.log(chart)
    var datas = [[820, 932, 901, 934, 1290, 1330, 1320], [120, 1132, 91, 934, 290, 1330, 320], [20, 93, 91, 34, 120, 30, 20], [1820, 111, 222, 934, 1290, 1330, 1320]]
    var option = {
      grid: {
        left: '15%'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: datas[IDX],
        type: 'line'
      }]
    }
    chart.setOption(option)
  }

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
      navigationBarTitleText: '控制面板',
      usingComponents: {
        'ec-canvas': '../../ec-canvasyl/ec-canvas'
      }
    }
    components = {
      toast: Toast,
      controlPanelLight: controlPanelLight
      // ecCanvas: EcCanvas
    }

    mixins = [testMixin]

    data = {
      canvasId: 'mychart-pie',
      ec: {
        // onInit: this.init
        lazyLoad: true
      },
      ifShowChart: false,
      datas: [[820, 932, 901, 934, 1290, 1330, 1320], [120, 1132, 91, 934, 290, 1330, 320]],
      ecComponent: null,
      chart: null,
      isLoaded: false,
      CurTab: 0,
      TabMenu: ['日', '周', '月', '年']
    }

    computed = {
    }

    methods = {
      changeChart (IDX) {
        console.log('click')
        this.CurTab = IDX
        this.$apply()
        // this.initTab(IDX)
        // this.tabChange(IDX)
        setTimeout(() => {
          this.init(IDX)
        },300)
        
      },
      dispose () {
        this.isDisposed = true
        this.$apply()
      },
      // 切换视图
      ToggleShowChart() {
        this.ifShowChart = !this.ifShowChart
        this.$apply()
        this.initTab(0)
        // this.init(this.data.CurTab)
      },
      // 仅开关类设备
      OnlySwitch() {
        const innerAudioContext = wepy.createInnerAudioContext()
        innerAudioContext.autoplay = true
        innerAudioContext.src = 'https://jingshangs.com/upload/ON.mp3'
        innerAudioContext.onPlay(() => {
          console.log('播放')
        })
        innerAudioContext.onError((res) => {
          console.log(res)
        })
        wepy.showModal({
          title: '提示',
          content: '控制器不在线！',
          showCancel: false,
          success: (res) => {
          }
        })
      }
    }

    // self fn
    initTab (IDX) {
      this.init(IDX)
    }
    init (IDX) {
      this.ecComponent.init((canvas) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, '320', {
          width: '320',
          height: '324'
          // width: width ? width : app.globalData.width,
          // height: height ? height : app.globalData.width,
        })
        setOption(chart, IDX)
        // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
        this.chart = chart
        this.$apply()
        return chart
      })
    }
    tabChange (IDX) {
      this.CurTab = IDX
      this.$apply()
      console.log('this.CurTab--------------')
      console.log(this.CurTab)
    }

    events = {
    }

    onLoad() {

    }
    onReady() {
      // 获取组件
      this.ecComponent = this.$wxpage.selectComponent('#mychart-dom-bar')
      this.$apply()
      console.log(this.$wxpage.selectComponent('#mychart-dom-bar'))
    }
  }
</script>
