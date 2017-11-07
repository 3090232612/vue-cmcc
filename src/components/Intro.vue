<template>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <router-link to="/lab">
    <h2 class="title">实验室介绍</h2>
    </router-link>
  </div>
  <div v-for="intro in intros" class="text item" v-bind:key="intro">
    <router-link :to="intro.to">
    <el-container>
      <el-col :span="12" class="intro-img">
        <img :src="intro.img" alt="">
      </el-col>
      <el-col :span="12" class="intro-desc">
        <el-row>
          <h3 class="thin">{{ intro.name }}</h3>
        </el-row>
        <el-row>
          <span>{{ intro.description }}</span>
        </el-row>
      </el-col>
    </el-container>
  </router-link>
  </div>
</el-card>
</template>

<script>
  import introdirection from '../assets/intro-direction.png'
  import introenv from '../assets/intro-env.png'
  import intropride from '../assets/intro-pride.png'
  import introteam from '../assets/intro-team.png'

  export default {
    name: 'Intro',
    data () {
      return {
        intros: [
          {
            img: introdirection,
            name: '研究方向',
            description: '2G、3G、4G、Wifi、蓝牙',
            to: '/lab#lab-direction'
          },
          {
            img: introenv,
            name: '研究环境',
            description: 'USRP、OpenLTE、OsmocomBB',
            to: '/lab#lab-env'
          },
          {
            img: intropride,
            name: '研究成果',
            description: '漏洞挖掘、报告、专利',
            to: '/lab#lab-pride'
          },
          {
            img: introteam,
            name: '研究团队',
            description: '安全所无线安全团队',
            to: '/lab#lab-team'
          }
        ]
      }
    }
  }
</script>

<style>
.box-card {
  background-color: rgba(0, 0, 0, 0);
}

.el-card__body {
  height: 424px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box-card h3 {
  margin: 0px;
}

.box-card .text.item {
  width: 100%;
  opacity: 0.5;
  font-weight: 900;
  transition: opacity 0.5s linear;
}

.box-card .text.item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.box-card .text.item h3 {
  text-align: left;
}

.box-card .text.item span {
  text-align: left;
  float: left;
}

.box-card .intro-img {
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-card .intro-img img {
  max-width: 100%;
  max-height: 100%;
}

.box-card .intro-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.box-card h2, .box-card h3 {
  color: #d7ecff;
}

</style>

