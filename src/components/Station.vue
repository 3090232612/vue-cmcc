<template>
  <el-row>
    <Nav title="4G+2G 伪基站" value5="5"></Nav>
    <el-container class="station-intro">
      <el-col :span="20">
        <el-container direction="horizen">
          <el-col>
            <img :src="station1" alt="">
          </el-col>
          <el-col class="description">
            <h3>
              2017年3月复现电信网重大漏洞——“幽灵接线员”，该漏洞利用CSFB过程不鉴权，劫持用户的通话并仿冒真实用户通信，并可进一步通过截获短信验证码的方式，冒充用户登录业务账户（如金融、支付、网站等）。
            </h3>
          </el-col>
        </el-container>
      </el-col>
    </el-container>
    <el-container class="station-intro" direction="vertical">
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
    <el-container direction="vertical" class="station-intro">
      <h2>漏洞原理</h2>
      <el-container>
        <el-col>
          <img :src="station3" alt="">
        </el-col>
        <el-col class="loophole-reason-col">
          <el-col class="loophole-reason">
            <h3>
              一、4G伪基站更改TAC值，并在广播消息中发送该TAC值，诱使终端发起TAC更新请求。<br>
              二、伪基站可以从TAC请求中获得终端的GUTI，也可以发送标识请求获得终端的IMSI或者IMEI号码。<br>
              三、当4G伪基站得到终端信息后，向终端发送TAU更新失败消息并释放RRC连接。<br>
              四、在RRC释放消息重定向功能中提前写入2G伪基站频点，并将该RRC释放消息发送给终端，迫使终端接入已布置好的2G伪基站中。<br>
            </h3>
          </el-col>
        </el-col>
      </el-container>
    </el-container>
    <el-container direction="vertical" class="station-intro">
      <h2>修复方案</h2>
      <el-col :span="18" offset="3">
        <h3>
          方案一：在CSFB之前开启AS安全上下文，用AS安全保护RRC release<br>
          方案二：MME使用KASME推衍出一个KNAS_token，然后将KNAS_token给eNB，eNB发送CSFB RRC release的时候使用KNAS_token进行完保
        </h3>
      </el-col>
    </el-container>
    <el-container direction="vertical" class="station-intro">
      <h2>修复进展</h2>
      <h2>推动3GPP修订相关协议(进行中）</h2>
    </el-container>
    <el-container direction="vertical" class="station-intro">
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
import Footer from './Footer'
import station1 from '../assets/station/station_1.png'
import station21 from '../assets/station/station_2_1.jpg'
import station22 from '../assets/station/station_2_2.jpg'
import station3 from '../assets/station/station_3.png'
import Sms41 from '../assets/sms/sms_4_1.jpg'
import Sms42 from '../assets/sms/sms_4_2.jpg'
import Sms43 from '../assets/sms/sms_4_3.jpg'
import Sms44 from '../assets/sms/sms_4_4.jpg'
import Sms45 from '../assets/sms/sms_4_5.jpg'
export default {
  name: 'station',
  data () {
    return {
      station1,
      station3,
      harmfuls: [
        {
          img: station21,
          description: '危害一：利用LTE协议栈获取4G手机IMSI号、LAC号等敏感信息'
        },
        {
          img: station22,
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
.station-intro {
  color: #d7ecff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.4s ease;
}

.station-intro:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.station-intro .description {
  display: flex;
  justify-content: center;
  align-items: center;
}

.station-intro h3, .station-intro span {
  width: 80%;
  text-align: left;
}

.station-intro .fix-solution {
  text-indent: 2em;
  width: 80%;
  text-align: left;
}

.station-harmful h4 {
  text-align: center;
}

@media (max-width: 768px) {
  .station-intro h3, .station-intro span {
    width: 100%;
    text-align: left;
  }

  .station-intro .fix-solution {
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
.station-intro .loophole-reason {
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

