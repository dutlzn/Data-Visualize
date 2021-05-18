<template>
  <div>
    <common-card title="累计订单量" value="￥ 2,145,155,134">
      <template>
        <v-chart :options="getOptions()" />
        <!-- <div id="total-orders-chart">
        </div> -->
      </template>
      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">128,123,123</span>
      </template>
    </common-card>
  </div>
</template>
<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions() {
      var rondomData = [];
      for (let i = 0; i < 8; ++i) {
        rondomData.push(Math.floor(Math.random() * 50));
      }

      return {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: rondomData,
            // 面积区域
            areaStyle: {
              color: "purple",
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            // 平滑展示
            smooth: true,
          },
        ],

        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      };
    },
  },
  mounted() {
    // const chartDom = document.getElementById('total-orders-chart');
    // const chart = this.$echarts.init(chartDom);
    // var rondomData = [];
    // for(let i = 0;i<8;++i){
    //   rondomData.push(Math.floor(Math.random() * 50));
    // }
    // var option = {
    //   xAxis: {
    //     type: 'category',
    //     show: false,
    //     boundaryGap: false,
    //   },
    //   yAxis: {
    //     show: false
    //   },
    //   series: [{
    //     type: 'line',
    //     data: rondomData,
    //     // 面积区域
    //     areaStyle: {
    //       color: 'purple'
    //     },
    //     lineStyle: {
    //       width: 0
    //     },
    //     itemStyle:{
    //       opacity: 0
    //     },
    //     // 平滑展示
    //     smooth: true
    //   }],
    //   grid: {
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //   }
    // };
    // chart.setOption(option);
  },
};
</script>

<style scoped>
#total-orders-chart {
  width: 100%;
  height: 100%;
}
</style>
