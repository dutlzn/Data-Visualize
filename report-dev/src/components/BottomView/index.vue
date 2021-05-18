<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">13,123</div>
                <v-chart :options="searchUserOptions"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">331,311</div>
                <v-chart :options="searchUserOptions"></v-chart>
              </div>
            </div>

            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column
                  prop="rank"
                  label="排名"
                  width="”180"
                ></el-table-column>
                <el-table-column
                  prop="keyword"
                  label="关键词"
                  width="”180"
                ></el-table-column>
                <el-table-column
                  prop="count"
                  label="搜索量"
                ></el-table-column>
                <el-table-column
                  prop="users"
                  label="搜索用户数"
                ></el-table-column>
              </el-table>
              <el-pagination 
              layout="prev,pager,next" 
              :total="4" 
              :page-size="1" 
              background
              @current-change="onPageChange"></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>

        <template>
          <v-chart :options="categoryOption" />
        </template>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onPageChange(page) {
      // console.log(page);
    }
  },
  data() {
    return {
      searchUserOptions: {
        xAxis: {
          type: "category",
          // 坐标轴两端空白策略
          boundaryGap: false,
        },
        yAxis: {
          show: false,
          min: 0,
          max: 600,
        },
        series: [
          {
            type: "line",
            data: [100, 150, 200, 550, 200, 150],
            areaStyle: {
              color: "purple",
            },
            lineStyle: {
              color: "grey",
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      },
      searchNumOptions: {},
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 2,
          rank: 2,
          keyword: "西安",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 3,
          rank: 4,
          keyword: "杭州",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 4,
          rank: 3,
          keyword: "上海",
          count: 100,
          users: 90,
          range: "90%",
        },
      ],
      radioSelect: "品类",
      categoryOption: {},
    };
  },
};
</script>

<style scoped>
.bottom-view {
  /* 拍成一行 */
  display: flex;
  margin-top: 20px;
}

.view {
  flex: 1;
  /* width: 50%;
  box-sizing: border-box; */
}

.view:first-child {
  padding-right: 10px;
}

.view:last-child {
  padding-left: 10px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  font-weight: 500;
  padding: 0 0 0 20px;
}

.radio-wrapper {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 20px;
}

.chart-wrapper {
  display: flex;
  flex-direction: column;
  height: 452px;
}

.chart-inner {
  display: flex;
  padding: 0 10px;
  margin-top: 20px;
}

.chart {
  flex: 1;
  padding: 0 10px;
}

.chart-title {
  color: #999;
  font-size: 14px;
}

.chart-data {
  font-size: 22px;
  color: #333;
  font-weight: 500;
  letter-spacing: 2px;
}

.table-wrapper {
  flex: 1;
  margin-top: 20px;
  padding: 0 20px 20px;
}

.echarts {
  height: 50px;
}

.el-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
</style>
