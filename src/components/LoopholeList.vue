<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 class="title">漏洞列表</h2>
      </div>
      <el-row :gutter="20">
        <el-col class="loophole" :span="6" v-for="loophole in loopholes" v-bind:key="loophole">
          <router-link :to="loophole.url">
            <div class="grid-content">
              <el-row>
                <img :src="loophole.img" alt="">
              </el-row>
              <span>{{ loophole.name }}</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import loopholesms from '../assets/loophole-sms.png'
  import loopholecellular from '../assets/loophole-cellular.png'
  import loopholecall from '../assets/loophole-call.png'
  import loopholebluetooth from '../assets/loophole-bluetooth.png'
  import loopholestation from '../assets/loophole-station.png'
  import loopholehack from '../assets/loophole-hack.png'
  import loopholewifi from '../assets/loophole-wifi.png'
  import loopholemore from '../assets/loophole-more.png'

  export default {
    name: 'loopholelist',
    data () {
      return {
        loopholes: [
          {
            url: '/sms',
            img: loopholesms,
            name: '短信劫持'
          },
          {
            url: '/traffic',
            img: loopholecellular,
            name: '流量失血'
          },
          {
            url: '/call',
            img: loopholecall,
            name: '通话劫持'
          },
          {
            url: '/wait',
            img: loopholebluetooth,
            name: '蓝牙待定'
          },
          {
            url: '/station',
            img: loopholestation,
            name: '伪基站'
          },
          {
            url: '/info',
            img: loopholehack,
            name: '信息泄漏'
          },
          {
            url: '/wait',
            img: loopholewifi,
            name: 'WiFi待定'
          },
          {
            url: '/wait',
            img: loopholemore,
            name: '更多'
          }
        ]
      }
    }
  }
</script>

<style>

.loophole .grid-content {
  margin: 10px 0;
  padding: 20px;
  font-weight: 900;
  opacity: 0.5;
  border: 1px white solid;
  transition: opacity 0.5s linear;
}

.loophole .grid-content:hover {
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 1;
}

.loophole .grid-content img {
  max-width: 100%;
  max-height: 100%;
}

.loophole .grid-content span {
  font-size: 1em;
}

</style>

