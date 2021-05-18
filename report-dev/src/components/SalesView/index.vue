<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            class="sales-view-menu"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>

          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>

            <el-date-picker
              class="sales-view-data-picker"
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption"></v-chart>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <!-- class 动态绑定 -->
                <!-- <div class="lite-item-no" :class="+item.no<=3? 'top-no':''">{{item.no}}</div> -->
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {
    onMenuSelect(index) {
      let _this = this;
      _this.activeIndex = index;
    },
  },
  mounted() {
    let _this = this;
    let data = [];
    for (let i = 0; i < 12; ++i) {
      data.push(Math.floor(Math.random() * 100) + 100);
    }
    _this.randomData = data;
  },
  data() {
    return {
      randomData: [],
      activeIndex: "1",
      radioSelect: "今日",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              // debugger
              picker.$emit("pick", [start, end], true);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end], true);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end], true);
            },
          },
        ],
      },

      chartOption: {
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee",
            },
          },
        },
        series: [
          {
            type: "bar",
            barWidth: "35%",
            data: [191, 141, 156, 166, 161, 170, 192, 123, 125, 147, 192, 117],
          },
        ],
        color: ["#3398db"],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
      },
      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "321,123",
        },
        {
          no: 2,
          name: "肯德基",
          money: "123,123",
        },
        {
          no: 3,
          name: "五芳斋",
          money: "123,121",
        },
        {
          no: 4,
          name: "烤肉饭",
          money: "1,123",
        },
        {
          no: 5,
          name: "水蒸蛋",
          money: "1,100",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sales-view {
  margin-top: 20px;
}

.menu-wrapper {
  /* 按行排序*/
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-end;
  align-items: center;
}
.menu-right {
  position: absolute;
  right: 20px;
  display: flex;
}
.sales-view-menu {
  width: 100%;
  padding-left: 20px;
}
.sales-view-data-picker {
  margin-left: 10px;
}
/* .el-menu-item{
  height: 50px;
  line-height: 50px;
  margin: 0 20px;
} */

.sales-view-chart-wrapper {
  /* 排成一行 */
  display: flex;
  height: 270px;
}

.echarts {
  /* 收缩空间0.7 */
  flex: 0 0 70%;
  width: 70%;
  height: 100%;
}

.sales-view-list {
  /* 占满剩余款对*/
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.sales-view-title {
  margin-top: 20px;
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

.list-item {
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 20px;
  padding: 6px 20px 6px 0;
}

.list-item-no {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #333;
}

.list-item-no.top-no {
  background: #000;
  border-radius: 50%;
  color: #fff;
  font-weight: 500;
}

.list-item-name {
  margin-left: 10px;
  color: #333;
}

.list-item-money {
  flex: 1;
  /* 文字向右靠齐 */
  text-align: right;
}

.list-item-wrapper {
  margin-top: 15px;
}
</style>
