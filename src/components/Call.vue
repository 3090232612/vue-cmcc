<template>
  <el-row>
    <Nav title="通话劫持" value5="5"></Nav>
    <el-container class="call-intro">
      <el-col :span="20">
        <el-container direction="horizen">
          <el-col>
            <img :src="call1" alt="">
          </el-col>
          <el-col class="description">
            <h3>2017年3月复现电信网重大漏洞——“幽灵接线员”，该漏洞利用CSFB过程不鉴权，劫持用户的通话并仿冒真实用户通信，并可进一步通过截获短信验证码的方式，冒充用户登录业务账户（如金融、支付、网站等）。
</h3>
          </el-col>
        </el-container>
      </el-col>
    </el-container>
    <el-container class="call-intro" direction="vertical">
      <h2>漏洞危害</h2>
      <el-container>
        <el-col v-for="harmful in harmfuls" v-bind:key="harmful" class="call-harmful">
            <el-row align="center">
              <img :src="harmful.img" width="200px" height="200px" alt="">
            </el-row>
            <el-row align="center">
              <h4>{{ harmful.description }}</h4>
            </el-row>
          </el-col>
      </el-container>
    </el-container>
    <el-container direction="vertical" class="call-intro">
      <h2>漏洞原理</h2>
      <el-container>
        <el-col>
          <img :src="call3" alt="">
        </el-col>
        <el-col class="loophole-reason-col">
          <el-col class="loophole-reason">
            <h3>
              <strong>步骤一 获得携带受害用户 TMSI/IMSI</strong> <br>
              攻击者A手机监测到 2G 的寻呼消息，通过寻呼消息获取到 TMSI/IMSI 信息 <br>
              <strong>步骤二 抢占用户信道</strong> <br>
              攻击者利用获得的用户标识伪造寻呼响应Paging Response消息并抢先回应 <br>
              <strong>步骤三 劫持通话</strong> <br>
              攻击者接抢占到通话信道，劫持用户通话 <br>
              <strong>步骤四 保持信道</strong> <br>
              攻击者拨打第三方合作攻击者电话，保持住链路，并获取受害者手机号码 <br>
              <strong>步骤五 后续攻击</strong> <br>
              登陆截获短信验证码的方式，冒充用户登录业务账户（如金融、支付、网站等）
            </h3>
          </el-col>
        </el-col>
      </el-container>
    </el-container>
    <el-container direction="vertical" class="call-intro">
      <h2>修复方案</h2>
      <h2>在所有涉及2G呼叫的场景中均启用被叫鉴权机制，从而避免该漏洞被利用成功。</h2>
    </el-container>
    <el-container direction="vertical" class="call-intro">
      <h2>修复进展</h2>
      <h2 class="fix-solution">在集团公司网路部的统筹安排下，研究院在北京辖区选取了6个测试地点，进行了现网抽测排查。经针对（CSFB等场景下）2G被叫鉴权关闭与开启的情况进行了两轮次对比测试，结果：</h2>
      <el-col :md="16" :lg="12" :sm="20" :xs="24">
      <el-table
        :data="tableData"
        header-cell-style="text-align:center">
        <el-table-column
          prop="addr"
          label="地点"
          width="180">
        </el-table-column>
        <el-table-column
          prop="before"
          label="未修改配置前">
        </el-table-column>
        <el-table-column
          prop="after"
          label="修改配置后">
        </el-table-column>
      </el-table>
      </el-col>
    </el-container>
    <el-container direction="vertical" class="call-intro">
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
import call1 from '../assets/call/call_1.png'
import call21 from '../assets/call/call_2_1.png'
import call22 from '../assets/call/call_2_2.jpg'
import call23 from '../assets/call/call_2_3.png'
import call3 from '../assets/call/call_3.png'
import Sms41 from '../assets/sms/sms_4_1.jpg'
import Sms42 from '../assets/sms/sms_4_2.jpg'
import Sms43 from '../assets/sms/sms_4_3.jpg'
import Sms44 from '../assets/sms/sms_4_4.jpg'
import Sms45 from '../assets/sms/sms_4_5.jpg'
export default {
  name: 'call',
  data () {
    return {
      call1,
      call3,
      harmfuls: [
        {
          img: call21,
          description: '危害一：劫持受害者通话，且受害者和网络侧无感知'
        },
        {
          img: call22,
          description: '危害二：获得受害者手机号'
        },
        {
          img: call23,
          description: '危害三：利用手机号码登录各种互联网应用的账户，截获短信验证码，重置各种密码，或者完成支付功能'
        }
      ],
      members: [
        Sms41,
        Sms42,
        Sms43,
        Sms44,
        Sms45
      ],
      tableData: [
        {
          addr: '上地',
          before: '发现可劫持呼叫',
          after: '未发现可劫持呼叫'
        },
        {
          addr: '研究院',
          before: '发现可劫持呼叫',
          after: '未发现可劫持呼叫'
        },
        {
          addr: '北京西站',
          before: '发现可劫持呼叫',
          after: '未发现可劫持呼叫'
        },
        {
          addr: '沙河',
          before: '发现可劫持呼叫',
          after: '未发现可劫持呼叫'
        },
        {
          addr: '回龙观',
          before: '发现可劫持呼叫',
          after: '未发现可劫持呼叫'
        },
        {
          addr: '天坛',
          before: '未发现可劫持呼叫',
          after: '未发现可劫持呼叫'
        }
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

.call-intro {
  color: #d7ecff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.4s ease;
}

.call-intro:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.call-intro .description {
  display: flex;
  justify-content: center;
  align-items: center;
}

.call-intro h3, .call-intro span {
  width: 80%;
  text-align: left;
}

.call-intro .fix-solution {
  text-indent: 2em;
  width: 80%;
  text-align: left;
}

.call-harmful h4 {
  text-align: center;
}

@media (max-width: 768px) {
  .call-intro h3, .call-intro span {
    width: 100%;
    text-align: left;
  }

  .call-intro .fix-solution {
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
}

/* 漏洞原理样式 */
.call-intro .loophole-reason {
  text-align: left;
}

.call-intro .loophole-reason h3 {
  font-weight: 100;
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

