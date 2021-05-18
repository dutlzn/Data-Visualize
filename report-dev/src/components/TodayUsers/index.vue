<template>
  <div>
    <common-card title="今日交易用户数" value="810,211">
      <template>
        <!-- <div id="today-users-charts"></div> -->
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
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
      var romdomData = [];
      for (let i = 0; i < 14; ++i) {
        romdomData.push(Math.floor(Math.random() * 100) + 100);
      }
      return {
        tooltip: {},
        color: ["skyblue"],
        xAxis: {
          type: "category",
          show: false,
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
          ],
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "bar",
            data: romdomData,
            barWidth: "60%",
          },
        ],

        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      };
    },
  },
  mounted() {
    // const chartDom = document.getElementById("today-users-charts");
    // const chart = this.$echarts.init(chartDom);
    // var romdomData = [];
    // for(let i = 0;i<14;++i){
    //   romdomData.push(Math.floor(Math.random() * 100) + 100);
    // }
    // var option = {
    //   tooltip: {},
    //   color: ['skyblue'],
    //   xAxis: {
    //     type: 'category',
    //     show: false,
    //     data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00','10:00', '11:00', '12:00', '13:00'],
    //   },
    //   yAxis: {
    //     show: false,
    //   },
    //   series: [
    //     {
    //       type: "bar",
    //       data: romdomData,
    //       barWidth: '60%',
    //     },
    //   ],
    //   grid: {
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0
    //   }
    // };
    // chart.setOption(option);
  },
};
</script>

<style scoped>
#today-users-charts {
  width: 100%;
  height: 100%;
}
</style>
