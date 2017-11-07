<template>
  <el-row>
    <Nav title="短信劫持" value5="5"></Nav>
    <el-container class="sms-intro">
      <el-col :span="20" offset="2">
        <el-container direction="horizen">
          <el-row type="flex" align="center">
            <img :src="Sms1" alt="">
          </el-row>
          <el-row type="flex" align="center" justify="center" class="description">
            <h3>2017年9月27日，安全所无线安全研究团队发现“短信劫持”漏洞，可对用户待接收的短信进行劫持，且网络侧、受害用户无感知。</h3>
          </el-row>
        </el-container>
      </el-col>
    </el-container>
    <Harmful></Harmful>
    <el-container direction="vertical" class="sms-intro">
      <h2>漏洞原理</h2>
      <el-container>
        <el-col>
          <img :src="Sms3" alt="">
        </el-col>
        <el-col>
          <el-col class="loophole-reason">
            <h2>步骤一 监测寻呼请求，获取用户标识(IMSI/TMSI)</h2>
            <h3>攻击者通过空口监测所在LAC下的2G寻呼请求消息，获取发向用户的Paging Request寻呼请求，从该消息中获取用户标识（IMSI/TMSI）</h3>
            <h2>步骤二 抢占用户信道</h2>
            <h3>攻击者利用获得的用户标识伪造寻呼响应Paging Response消息并抢先回应；</h3>
            <h2>步骤三 劫持用户短信</h2>
            <h3>攻击者接收到推送给用户的短信，实现劫持用户短信能力；</h3>
          </el-col>
        </el-col>
      </el-container>
    </el-container>
    <el-container direction="vertical" class="sms-intro">
      <h2>修复方案</h2>
      <h2>在所有涉及2G短信的场景中均100%启用被叫鉴权机制，从而避免该漏洞影响。</h2>
    </el-container>
    <el-container direction="vertical" class="sms-intro">
      <h2>修复进展</h2>
      <h2>针对该漏洞，安全所无线安全研究团队在进行各省抽测后，结果如下：</h2>
      <el-col :md="12" :lg="12" :sm="20" :xs="20">
      <el-table
        :data="tableData"
        header-cell-style="text-align:center">
        <el-table-column
          prop="province"
          label="省份"
          width="180">
        </el-table-column>
        <el-table-column
          prop="exist"
          label="是否存在风险"
          width="180">
        </el-table-column>
        <el-table-column
          prop="risk"
          label="风险">
        </el-table-column>
      </el-table>
      </el-col>
    </el-container>
    <el-container direction="vertical" class="sms-intro">
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
  import Harmful from './Harmful'
  import Footer from './Footer'
  import Sms1 from '../assets/sms/sms_1.png'
  import Sms21 from '../assets/sms/sms_2_1.png'
  import Sms22 from '../assets/sms/sms_2_2.png'
  import Sms23 from '../assets/sms/sms_2_3.png'
  import Sms3 from '../assets/sms/sms_3.png'
  import Sms41 from '../assets/sms/sms_4_1.jpg'
  import Sms42 from '../assets/sms/sms_4_2.jpg'
  import Sms43 from '../assets/sms/sms_4_3.jpg'
  import Sms44 from '../assets/sms/sms_4_4.jpg'
  import Sms45 from '../assets/sms/sms_4_5.jpg'

  export default {
    name: 'Sms',
    data () {
      return {
        Sms1,
        Sms3,
        members: [
          Sms41,
          Sms42,
          Sms43,
          Sms44,
          Sms45
        ],
        steps: [
          {
            img: Sms21,
            description: '基于攻击设备执行空口全量监听'
          },
          {
            img: Sms22,
            description: '从所有获取的信息中筛选获取机密信息'
          },
          {
            img: Sms23,
            description: '进行窃取或充值卡盗用'
          }
        ],
        tableData: [
          {
            province: '北京',
            exist: '存在',
            risk: '可被劫持'
          },
          {
            province: '天津',
            exist: '不存在',
            risk: '无法劫持'
          },
          {
            province: '内蒙古',
            exist: '不存在',
            risk: '无法劫持'
          }
        ],
        active: 1,
        activeName: '1'
      }
    },
    components: {
      Nav,
      Harmful,
      Footer
    },
    methods: {
      next () {
        if (this.active++ > 2) this.active = 1
      }
    }
  }
</script>

<style>

.sms-intro {
  color: #d7ecff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.4s ease;
}

.sms-intro:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.sms-intro .description {
  justify-content: center;
  align-items: center;
}

.sms-intro h3, .sms-intro span {
  width: 60%;
  text-align: left;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.team img {
  margin: 20px;
  border-radius: 60px;
}

/* 表格样式 */
.el-table {
  background-color: rgba(255, 255, 255, 0);
}

.el-table tr {
  background-color: rgba(255, 255, 255, 0);
  font-size: 20px;
}

/* 漏洞原理样式 */
.loophole-reason {
  margin: 0 0 0 40px;
  text-align: left;
}

</style>

