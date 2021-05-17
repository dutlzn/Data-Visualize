<template>
  <div>
    <common-card title="累计销售额 " value="￥ 2222.22">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase" />
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">38.89%</span>
            <div class="decrease" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">￥ 30,000,000</span>
      </template>
    </common-card>
  </div>
</template>
<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
};
</script>

<style scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  /*垂直居中*/
  flex-direction: column;
  justify-content: center;
}
.compare {
  display: flex;
  align-items: center;
  height: 50%;
  font-size: 12px;
  /* background: yellow; */
  margin-top: 3px;
  color: #666;

}

</style>
