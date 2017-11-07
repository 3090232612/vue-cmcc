<template>
  <el-container>
    <el-col :span="4" class="nav">
      <el-container class="img-area">
        <router-link to="/">
        <img :src="logo" alt="" width="40px">
        </router-link>
      </el-container>
    </el-col>
    <el-col :span="20" class="nav">
      <el-container class="title-area">
        <span>{{ title }}</span>
        <el-rate
          v-if="value5 !== undefined"
          v-model="value5"
          disabled
          disabled-void-color="#000"
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-container>
    </el-col>
    <!-- 预留菜单 
    <el-col class="nav">
      
      <el-menu class="navmenu" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">订单管理</el-menu-item>
      </el-menu>
    </el-col>-->
  </el-container>
</template>

<script>
  import logo from '../assets/logo.png'
  export default {
    name: 'Nav',
    props: [
      'title',
      'value5'
    ],
    data () {
      return {
        logo
      }
    }
  }
</script>

<style>
.nav {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  color: #d7ecff;
  font-size: 24px;
}

.h2 {
  font-size: 20px;
}

.img-area {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.title-area {
  height: 100%;
  display: flex;
  align-items: center;
}

.el-rate {
  margin-left: 10px;
}

.navmenu {
  background-color: rgba(255, 255, 255, 0.2);
}

</style>

