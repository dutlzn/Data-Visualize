<template>
  <div>
    <common-card title="累计销售额 " value="￥ 2222.22">
      <template>
        <div class="compare"></div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="money">￥ 30,000,000</span>
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
.compare {
  height: 100%;
  background: yellow;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>
