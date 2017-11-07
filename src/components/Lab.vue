<template>
  <el-row>
    <Nav title="实验室"></Nav>
    <el-container class="lab-intro intro" direction="vertical">
      <span class="intro-title">实验室介绍</span>
      <el-col :xs="24" :sm="20" :md="18">
        <h2>
          安全所无线安全实验室于2017年成立。
          研究方向涉及电信网（2G/3G/4G）、NBIoT、WiFi、蓝牙等多个无线领域，已有研究环境有 OsmocomBB 平台、Amrisoft 基站、CDS 路测软件等。
          实验室自成立以来，自主挖掘电信网重大漏洞 3 个，重现业界漏洞 4 个，发布中国移动焦点技术报告 7 篇，申请专利 32 项，推进 GSMA、3GPP 等国际组织修订漏洞涉及相关协议。
        </h2>
      </el-col>
    </el-container>
    <el-container id="lab-direction" class="lab-intro direction" direction="vertical">
      <span class="intro-title">研究方向</span>
      <el-container>
        <el-col v-for="direction in directions" v-bind:key="direction" class="lab-direction">
          <el-row align="center">
            <img :src="direction.img" alt="">
          </el-row>
          <el-row align="center">
            <h3>{{ direction.name }}</h3>
          </el-row>
        </el-col>
      </el-container>
    </el-container>
    <el-container id="lab-env" class="lab-intro env" direction="vertical">
      <span class="intro-title">研究环境</span>
      <el-col :span="20">
        <slick :options="slickOptions">
          <a v-for="env in envs" v-bind:key="env">
            <el-container direction="vertical" class="lab-env">
              <img :src="env.img" alt="">
              <h3>{{ env.description }}</h3>
            </el-container>
          </a>
        </slick>
      </el-col>
    </el-container>
    <el-container id="lab-pride" class="lab-intro" direction="vertical">
      <span class="intro-title">研究成果</span>
      <el-container>
        <el-col v-for="pride in prides" v-bind:key="pride" class="lab-pride">
            <el-row align="center">
              <img :src="team3" width="200px" height="200px" alt="">
            </el-row>
            <el-row align="center">
              <h2>{{ pride.pride }}</h2>
              <h4>{{ pride.description }}</h4>
            </el-row>
          </el-col>
      </el-container>
    </el-container>
    <el-container id="lab-team" direction="vertical" class="lab-intro">
      <span class="intro-title">研究团队</span>
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
  import '../../node_modules/slick-carousel/slick/slick.css'
  import Slick from 'vue-slick'
  import Nav from './Nav'
  import Footer from './Footer'
  import team11 from '../assets/lab/team_1_1.png'
  import team12 from '../assets/lab/team_1_2.png'
  import team13 from '../assets/lab/team_1_3.png'
  import team14 from '../assets/lab/team_1_4.png'
  import team21 from '../assets/lab/team_2_1.jpg'
  import team22 from '../assets/lab/team_2_2.jpg'
  import team23 from '../assets/lab/team_2_3.jpg'
  import team24 from '../assets/lab/team_2_4.png'
  import team25 from '../assets/lab/team_2_5.png'
  import team26 from '../assets/lab/team_2_6.png'
  import team27 from '../assets/lab/team_2_7.png'
  import team3 from '../assets/lab/team_3.png'
  import Sms41 from '../assets/sms/sms_4_1.jpg'
  import Sms42 from '../assets/sms/sms_4_2.jpg'
  import Sms43 from '../assets/sms/sms_4_3.jpg'
  import Sms44 from '../assets/sms/sms_4_4.jpg'
  import Sms45 from '../assets/sms/sms_4_5.jpg'

  export default {
    name: 'lab',
    data () {
      return {
        slickOptions: {
          slidesToShow: 3,
          slideToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        },
        members: [
          Sms41,
          Sms42,
          Sms43,
          Sms44,
          Sms45
        ],
        team3,
        directions: [
          {
            name: 'Telecom',
            img: team11
          },
          {
            name: 'NBIoT',
            img: team12
          },
          {
            name: 'WIFI',
            img: team13
          },
          {
            name: 'Bluetooth',
            img: team14
          }
        ],
        envs: [
          {
            img: team21,
            description: 'OsmocomBB 硬件'
          },
          {
            img: team22,
            description: '软件无线电 USRP B210'
          },
          {
            img: team23,
            description: '路测环境'
          },
          {
            img: team24,
            description: '基于 OsmocomBB 的自研工具'
          },
          {
            img: team25,
            description: '路测软件'
          },
          {
            img: team26,
            description: '自研发包工具'
          },
          {
            img: team27,
            description: '无线监听分析平台'
          }
        ],
        prides: [
          {
            pride: '挖掘漏洞',
            description: '自主挖掘重大电信漏洞 3 个，漏洞复现 4 个'
          },
          {
            pride: '报告、论文、专利',
            description: '发布中国移动焦点技术报告 7 篇，申请专利 32 项'
          },
          {
            pride: '标准',
            description: '推进 GSMA、3GPP 等国际组织修订漏洞涉及相关协议'
          }
        ]
      }
    },
    components: {
      Nav,
      Slick,
      Footer
    }
  }
</script>

<style>

.lab-intro {
  color: #d7ecff;
  align-items: center;
  padding: 40px;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.4s ease;
}

.lab-intro:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.lab-intro.intro h2 {
  text-align: left;
  text-indent: 2em;
}

.lab-intro .intro-title {
  font-size: 30px;
  font-weight: 900;
  padding: 0 0 20px 0;
}

.lab-intro.env:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.lab-intro .lab-direction {
  margin: 0 20px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 0 #41516a;
}

.lab-intro .lab-direction:hover {
  box-shadow: 10px 10px 0 #41516a;
  transition: box-shadow 1px linear;
}

.lab-intro .lab-env {
  padding: 0 30px;
}

.lab-intro .lab-env img {
  max-width: 100%;
  max-height: 100%;
}

.lab-intro .team img {
  margin: 20px;
  border-radius: 60px;
}

.lab-intro .lab-pride {
  border: 1px white solid;
  margin: 0 20px;
  padding: 20px 0;
}

</style>

