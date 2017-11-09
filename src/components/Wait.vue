<template>
  <el-row class="page">
    <h1>敬请期待</h1>
    <router-link to="/">
      <h3>返回首页</h3>
    </router-link>
  </el-row>
</template>

<script>
export default {
  name: 'wait',
  data () {
    return {}
  }
}
</script>

<style>
.page {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1, h2 {
  color: #d7ecff;
}
</style>

