<template>
<div>12312</div>
  <!-- <v-chart :options="data" /> -->
  <!-- <ve-line :data="data2" /> -->
</template>
<script>
export default {
  data() {
    return {
      data2: {
        columns: ["日期", "访问用户", "下单用户"],
        rows: [
          { 日期: "2018-05-22", 访问用户: 32371, 下单用户: 19810 },
          { 日期: "2018-05-23", 访问用户: 12328, 下单用户: 4398 },
          { 日期: "2018-05-24", 访问用户: 92381, 下单用户: 52910 },
        ],
      },
      data: {
        xAxis: {
          type: "category",
        },
        yAxis: {},
        series: [
          {
            type: "line",
            data: [1, 2, 3, 4],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>
