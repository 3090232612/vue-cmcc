<template>
  <el-container class="loophole-harmful" direction="vertical">
    <h2>漏洞危害</h2>
    <el-carousel indicator-position="outside" height="500px" class="box">
      <el-carousel-item v-for="harmful in harmfuls" :key="harmful">
        <el-container class="loophole-harmful-intro" direction="vertical">
          <el-col :xs="20" :sm="20" :md="16" lg="16">
            <h2>{{ harmful.description }}</h2>
          </el-col>
          <el-container>
            <el-col v-for="step in harmful.steps" v-bind:key="step" class="step">
              <el-container>
                <img :src="step.img" alt="">
              </el-container>
              <el-container>
                <h3>{{ step.description }}</h3>
              </el-container>
            </el-col>
          </el-container>
        </el-container>
      </el-carousel-item>
    </el-carousel>
  </el-container>
</template>

<script>
  import harmful11 from '../assets/harmful/harmful_1_1.png'
  import harmful12 from '../assets/harmful/harmful_1_2.png'
  import harmful13 from '../assets/harmful/harmful_1_3.jpg'
  import harmful21 from '../assets/harmful/harmful_2_1.png'
  import harmful22 from '../assets/harmful/harmful_2_2.png'
  import harmful23 from '../assets/harmful/harmful_2_3.png'
  import harmful31 from '../assets/harmful/harmful_3_1.png'
  import harmful32 from '../assets/harmful/harmful_3_2.png'
  import harmful33 from '../assets/harmful/harmful_3_3.png'
  export default {
    name: 'harmful',
    data () {
      return {
        harmfuls: [
          {
            description: '危害场景一：直接利用短信中的取件码、充值卡等敏感信息进行窃取。',
            steps: [
              {
                description: '步骤一：基于攻击设备执行空口监听',
                img: harmful11
              },
              {
                description: '步骤二：从所有获取的信息中筛选获取机密信息，如e栈取件码和用户地址信息',
                img: harmful12
              },
              {
                description: '步骤三：窃取e栈中的财物',
                img: harmful13
              }
            ]
          },
          {
            description: '危害场景二：针对已知特定用户进行定点攻击，然后基于用户手机账号登陆应用（如139邮箱等）。',
            steps: [
              {
                description: '步骤一：执行基于短信的用户账号登陆',
                img: harmful21
              },
              {
                description: '步骤二：向该用户发送验证码，监听空口中基于应用发送号码，筛选有效信息',
                img: harmful22
              },
              {
                description: '步骤三：基于筛选后的信息进行账户登陆等操作',
                img: harmful23
              }
            ]
          },
          {
            description: '危害场景三：已知用户银行卡/支付账户的登陆账号和密码，登陆应用，劫持支付短信进行转账等操作。',
            steps: [
              {
                description: '步骤一：执行已窃取的用户账号登陆（如银行账户），交易时，采用手机动态密码（短信）',
                img: harmful31
              },
              {
                description: '步骤二：监听空口并基于应用发送号码（如95xxx）筛选有效信息',
                img: harmful32
              },
              {
                description: '步骤三：基于监听到的银行下发短信，进行转账操作',
                img: harmful33
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>

.loophole-harmful {
  padding: 40px;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.4s ease;
  color: #d7ecff;
}

.loophole-harmful:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.loophole-harmful-intro {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loophole-harmful .box {
  padding: 10px 0;
}

.loophole-harmful .products {
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 0 40px;
}

.loophole-harmful .step {
  border: 1px white solid;
  margin: 20px;
  padding: 10px;
}

.loophole-harmful .step img {
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 768px) {
  .loophole-harmful .step h3 {
    font-size: 1em;
  }
}

.loophole-harmful .step .el-container {
  display: flex;
  justify-content: center;
  text-align: left;
}

</style>
