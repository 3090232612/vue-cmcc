<template>
  <el-row>
    <Nav title="无线安全实验室"></Nav>
    <el-container class="product-area">
      <el-col :span="20" offset="2">
        <Product></Product>
      </el-col>
    </el-container>
    <el-container class="intro-loopholelist">
      <el-col :xs="24" :sm="24" :md="20" lg="20">
        <el-container>
          <el-col :span="8" class="intro-area">
            <Intro></Intro>
          </el-col>
          <el-col :span="16" class="loopholelist-area">
            <LoopholeList></LoopholeList>
          </el-col>
        </el-container>
      </el-col>
    </el-container>
    <Footer></Footer>
  </el-row>
</template>

<script>
import Nav from './Nav'
import Product from './Product'
import Intro from './Intro'
import LoopholeList from './LoopholeList'
import Footer from './Footer'

export default {
  name: 'home',
  components: {
    Nav,
    Product,
    Intro,
    LoopholeList,
    Footer
  }
}
</script>

<style>

a {
  text-decoration: none;
}

span {
  color: #d7ecff;
}

.intro-loopholelist {
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-area, .loopholelist-area {
  padding: 10px;
}

</style>

