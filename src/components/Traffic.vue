<template>
  <el-row>
    <Nav title="流量失血" value5="5"></Nav>
    <el-container class="traffic-intro">
      <el-col :span="20">
        <el-container direction="horizen">
          <el-col>
            <img :src="traffic1" alt="">
          </el-col>
          <el-col class="description">
            <h3>2017年5月，安全所无线安全研究团队自主挖掘“流量吸血鬼”漏洞，该漏洞利用 LTE 网络下终端可互访的缺陷，耗尽用户流量并发起 Dos 攻击。</h3>
          </el-col>
        </el-container>
      </el-col>
    </el-container>
    <el-container class="traffic-intro" direction="vertical">
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
    <el-container direction="vertical" class="traffic-intro">
      <h2>漏洞原理</h2>
      <el-col :span="20">
        <el-container>
          <el-col>
            <img :src="traffic2" alt="">
          </el-col>
          <el-col class="loophole-reason-col">
            <el-col class="loophole-reason">
              <h3>
                步骤一、探测 LTE 终端地址：通过扫描探测发现存活的 IP 地址终端；<br>
                步骤二、发起流量耗尽攻击：通过脚本向被攻击终端发起流量耗尽攻击，实验主机上开启多个进程、以 100KB/S 的速度发送 SYN 请求，被攻击终端对收到的指令不断进行 ACK 应答，从而在无感知情况下而消耗大量的数据流量；<br>
                步骤三、形成 DoS 或 DDoS 攻击：在被攻击终端处理能力不足的情况下，将形成 DoS 攻击；利用多台手机对一台 PGW 设备形成有效 DDoS 攻击。
              </h3>
            </el-col>
          </el-col>
        </el-container>
      </el-col>
    </el-container>
    <el-container direction="vertical" class="traffic-intro">
      <h2>修复方案</h2>
      <h3>
        一、LTE 网下对两个终端互通进行限制，即可通过配置 PGW 使得两个终端禁止互通；<br>
        二、针对单个 IP 地址，设置最大连接数量限制，避免 SGW、PGW 遭受 DDoS 攻击。
      </h3>
    </el-container>
    <el-container direction="vertical" class="traffic-intro">
      <h2>修复进展</h2>
      <h3 class="fix-solution">
        现网已禁止 LTE 网络终端互通。
      </h3>
    </el-container>
    <el-container direction="vertical" class="traffic-intro">
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
  import traffic1 from '../assets/traffic/traffic_1.png'
  import traffic2 from '../assets/traffic/traffic_2.png'
  import traffic21 from '../assets/traffic/traffic_2_1.png'
  import traffic22 from '../assets/traffic/traffic_2_2.png'
  import traffic23 from '../assets/traffic/traffic_2_3.png'
  import Sms41 from '../assets/sms/sms_4_1.jpg'
  import Sms42 from '../assets/sms/sms_4_2.jpg'
  import Sms43 from '../assets/sms/sms_4_3.jpg'
  import Sms44 from '../assets/sms/sms_4_4.jpg'
  import Sms45 from '../assets/sms/sms_4_5.jpg'
  import Nav from './Nav'
  import Footer from './Footer'
  export default {
    name: 'traffic',
    data () {
      return {
        traffic1,
        traffic2,
        harmfuls: [
          {
            img: traffic21,
            description: '危害一：探测大量手机IP'
          },
          {
            img: traffic22,
            description: '危害二：在普通用户无感知情况下发起流量耗尽攻击，产生流量恶意计费'
          },
          {
            img: traffic23,
            description: '危害三：利用多部终端对PGW网络设备形成DoS或DDoS攻击'
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

.traffic-intro {
  color: #d7ecff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.4s ease;
}

.traffic-intro:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.traffic-intro .description {
  display: flex;
  justify-content: center;
  align-items: center;
}

.traffic-intro h3, .traffic-intro span {
  /* width: 60%; */
  text-align: left;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .traffic-intro h3, .traffic-intro span {
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
}

/* 漏洞原理样式 */
.loophole-reason {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.traffic-intro .fix-solution {
  text-align: center;
}

</style>
