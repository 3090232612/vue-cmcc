<template>
  <el-carousel indicator-position="outside" height="500px" class="product-box">
    <el-carousel-item v-for="product in products" :key="product">
      <el-container class="products">
        <el-col :md="12" :lg="12" :sm="24" :xs="24">
          <img :src="product.img"/>
        </el-col>
        <el-col :md="12" :lg="12" :sm="24" :xs="24">
          <span class="title">{{ product.name }}</span>
          <div class="intro-desc">
            <span>{{ product.intro }}</span>
          </div>
        </el-col>
      </el-container>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import duanxinjiechi from '../assets/duanxinjiechi.png'
  import liuliangshixue from '../assets/liuliangshixue.png'
  import tonghuajiechi from '../assets/tonghuajiechi.png'
  import weijizhan from '../assets/weijizhan.png'
  import xinxixielou from '../assets/xinxixielou.png'
  export default {
    name: 'product',
    data () {
      return {
        products: [
          {
            img: duanxinjiechi,
            name: '短信劫持',
            intro: '在用户无感知的情况下，截取用户短信，利用短信内容（如取件码、充值码等）进行后续攻击。'
          },
          {
            img: liuliangshixue,
            name: '流量失血',
            intro: '利用LTE网络下终端可互访的缺陷，耗尽用户流量并发起DoS攻击。'
          },
          {
            img: tonghuajiechi,
            name: '通话劫持',
            intro: '在用户无感知的情况下，可劫持用户的通话并仿冒真实用户通信，并可进一步通过截获短信验证码的方式，冒充用户登录业务账户（如金融、支付、网站等）。'
          },
          {
            img: weijizhan,
            name: '2G+4G 伪基站',
            intro: '在用户无感知的情况下，截取用户短信，利用短信内容（如取件码、充值码等）进行后续攻击。'
          },
          {
            img: xinxixielou,
            name: '信息泄漏',
            intro: '在用户无感知的情况下，窃取用户的IMSI、短信、LAC、CI等敏感信息值。'
          }
        ]
      }
    }
  }
</script>

<style>
.product-box {
  color: #d7ecff;
}

.products {
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
}

.products img {
  max-width: 100%;
  max-height: 100%;
}

.products .title {
  font-size: 2em;
  font-weight: 900;
}

.products .intro-desc {
  width: 50%;
  margin-left: 25%;
  text-align: left;
}

.products .intro-desc span {
  font-size: 1.5em;
}

@media (max-width:768px) {
  .products .title {
    font-size: 1.5em;
  font-weight: 900;
  }

  .products .intro-desc span {
    font-size: 1em;
  }
}

</style>
