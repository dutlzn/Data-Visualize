<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:  {
    title: String,
    value: String,
  }
};
</script>

<style  scoped>
/* 属性是一个布尔属性。

如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。 */
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 50px;
}

.line {
  margin: 10px 0; /*上下10*/
  border-top: 1px solid #eee;
}
.total{
  font-size: 12px;
  color: #666;
}
</style>




<style>
/* 全局样式 */
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}

.increase{
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}


.decrease{
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: black transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0px 5px;
}

</style>
