<template>
  <el-row>
    <Nav title="信息泄露" value5="3"></Nav>
    <el-container class="info-intro">
      <el-col :span="20">
        <el-container direction="horizen">
          <el-col>
            <img :src="info1" alt="">
          </el-col>
          <el-col class="description">
            <h3>
              在用户无感知的情况下，利用osmocombb环境，窃取基站或用户的敏感信息，如IMSI、短信、LAC、CI等。
            </h3>
          </el-col>
        </el-container>
      </el-col>
    </el-container>
    <el-container class="info-intro" direction="vertical">
      <h2>漏洞危害</h2>
      <el-container>
        <el-col v-for="harmful in harmfuls" v-bind:key="harmful" class="station-harmful">
            <el-row align="center">
              <img :src="harmful.img" width="200px" height="200px" alt="">
            </el-row>
            <el-row align="center">
              <h4>{{ harmful.description }}</h4>
            </el-row>
          </el-col>
      </el-container>
    </el-container>
    <el-container direction="vertical" class="info-intro">
      <h2>漏洞原理</h2>
      <el-container>
        <el-col>
          <img :src="info3" alt="">
        </el-col>
        <el-col class="loophole-reason-col">
          <el-col class="loophole-reason">
            <h3>
              利用osmocombb环境嗅探ccch信道的信息<br>
              包括：绝对频点号、信号强度、寻呼消息、用户IMSI号、LAC值、敏感短信等
            </h3>
          </el-col>
        </el-col>
      </el-container>
    </el-container>
    <el-container direction="vertical" class="info-intro">
      <h2>修复方案</h2>
      <el-col :span="12" offset="6">
        <h3>
          一、不在CCCH信道下发短信<br>
          二、推动LTE网络发展
        </h3>
      </el-col>
    </el-container>
    <el-container direction="vertical" class="info-intro">
      <h2>修复进展</h2>
      <h2>已无法利用嗅探公共信道的方式截取空口短信</h2>
    </el-container>
    <el-container direction="vertical" class="info-intro">
      <h2>挖掘团队</h2>
      <el-container direction="horizen" class="team">
        <div v-for="member in members" v-bind:key="member">
          <img :src="member" alt="" width="120px" height="120px">
        </div>
      </el-container>
    </el-container>
    <Footer></Footer>
  </el-row>
</template>

<script>
import Nav from './Nav'
import info1 from '../assets/info/info_1.png'
import info21 from '../assets/info/info_2_1.jpg'
import info22 from '../assets/info/info_2_2.jpg'
import info3 from '../assets/info/info_3.jpg'
import Footer from './Footer'
import Sms41 from '../assets/sms/sms_4_1.jpg'
import Sms42 from '../assets/sms/sms_4_2.jpg'
import Sms43 from '../assets/sms/sms_4_3.jpg'
import Sms44 from '../assets/sms/sms_4_4.jpg'
import Sms45 from '../assets/sms/sms_4_5.jpg'
export default {
  name: 'info',
  data () {
    return {
      info1,
      info3,
      harmfuls: [
        {
          img: info21,
          description: '危害一：利用LTE协议栈获取4G手机IMSI号、LAC号等敏感信息'
        },
        {
          img: info22,
          description: '危害二：给4G手机下发垃圾短信'
        }
      ],
      members: [
        Sms41,
        Sms42,
        Sms43,
        Sms44,
        Sms45
      ]
    }
  },
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
.info-intro {
  color: #d7ecff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.4s ease;
}

.info-intro:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.info-intro .description {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-intro h3, .info-intro span {
  width: 80%;
  text-align: left;
}

.info-intro .fix-solution {
  text-indent: 2em;
  width: 80%;
  text-align: left;
}

.info-harmful h4 {
  text-align: center;
}

@media (max-width: 768px) {
  .info-intro h3, .info-intro span {
    width: 100%;
    text-align: left;
  }

  .info-intro .fix-solution {
    text-indent: 2em;
    width: 100%;
    text-align: left;
  }
}

img {
  max-width: 100%;
  max-height: 100%;
}

.team img {
  margin: 20px;
  border-radius: 60px;
}

.loophole-reason-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 漏洞原理样式 */
.info-intro .loophole-reason {
  text-align: left;
  padding: 0 20px;
}

/* 表格样式 */
.el-table {
  background-color: rgba(255, 255, 255, 0);
}

.el-table tr {
  background-color: rgba(255, 255, 255, 0);
  font-size: 20px;
}
</style>


