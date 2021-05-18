<template>
  <div>
    <common-card title="累计用户数" value="123,123,123">
      <template>
        <!-- <div id="total-users-chart"></div> -->
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">1.82%</span>
          <div class="increase"></div>

          <span class="month">月同比</span>
          <span class="emphasis">12.12%</span>
          <div class="decrease"></div>
        </div>
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
      return {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: {
          type: "category",
          show: false,
        },
        series: [
          {
            type: "bar",
            data: [100],
            stack: "总量",
            barWidth: "10%",
            itemStyle: {
              color: "#45c846",
            },
          },
          {
            type: "bar",
            data: [250],
            stack: "总量",
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type: "custom",
            data: [100],
            stack: "总量",
            renderItem: (params, api) => {
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              //  console.log(endPoint);
              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d: "M512 640l170.666667-213.333333H341.333333z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M512 426.666667l170.666667 213.333333H341.333333z",
                      // M512 426.666667l170.666667 213.333333H341.333333z
                      // M512 640l170.666667-213.333333H341.333333z
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                ],
              };
            },
          },
        ],
      };
    },
  },
  mounted() {
    // // https://www.iconfont.cn/
    // const chartDom = document.getElementById("total-users-chart");
    // const chart = this.$echarts.init(chartDom);
    // var option = {
    //   grid: {
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //   },
    //   xAxis: {
    //     type: "value",
    //     show: false,
    //   },
    //   yAxis: {
    //     type: "category",
    //     show: false,
    //   },
    //   series: [
    //     {
    //       type: "bar",
    //       data: [100],
    //       stack: "总量",
    //       barWidth: "10%",
    //       itemStyle: {
    //         color: "#45c846",
    //       },
    //     },
    //     {
    //       type: "bar",
    //       data: [250],
    //       stack: "总量",
    //       itemStyle: {
    //         color: "#eee",
    //       },
    //     },
    //     {
    //       type: "custom",
    //       data: [100],
    //       stack: "总量",
    //       renderItem: (params, api) => {
    //         const value = api.value(0);
    //         const endPoint = api.coord([value, 0]);
    //         //  console.log(endPoint);
    //         return {
    //           type: "group",
    //           position: endPoint,
    //           children: [
    //             {
    //               type: "path",
    //               shape: {
    //                 d: "M512 640l170.666667-213.333333H341.333333z",
    //                 x: -5,
    //                 y: -20,
    //                 width: 10,
    //                 height: 10,
    //                 layout: "cover",
    //               },
    //               style: {
    //                 fill: "#45c946",
    //               },
    //             },
    //             {
    //               type: "path",
    //               shape: {
    //                 d: "M512 426.666667l170.666667 213.333333H341.333333z",
    //                 // M512 426.666667l170.666667 213.333333H341.333333z
    //                 // M512 640l170.666667-213.333333H341.333333z
    //                 x: -5,
    //                 y: 10,
    //                 width: 10,
    //                 height: 10,
    //                 layout: "cover",
    //               },
    //               style: {
    //                 fill: "#45c946",
    //               },
    //             },
    //           ],
    //         };
    //       },
    //     },
    //   ],
    // };
    // chart.setOption(option);
  },
};
</script>

<style scoped>
.total-users-footer {
  display: flex;
  align-items: center;
}
.month {
  margin-left: 10px;
}

#total-users-chart {
  width: 100%;
  height: 100%;
}
</style>


