<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="always"> 总是显示 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> 鼠标悬浮时显示 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never"> 从不显示 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never"> 从不显示 </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>