<script setup>
import { onMounted } from 'vue'
import { request } from '@/request/base'

// import TheWelcome from '../components/TheWelcome.vue'
console.log('xxxxxxxxxxxxxxx', window.wx)

const appid = 'wxde6343a35c8500e0'
const secret = '506e5357601e03e526e65920c7d1a800'
const redirect_uri = `https://m.weilaijishi.cn/wxLogin`
const encodeUrl = encodeURIComponent(redirect_uri)
// `http://192.168.31.71:5173/wxLogin`
const scope = `snsapi_userinfo` // 获取用户信息
const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeUrl}&response_type=code&scope=${scope}#wechat_redirect`

const handleClick = () => {
  window.open(url)
}

onMounted(() => {
  request.get(
    `/wxApi/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${'5fdsaf'}&grant_type=authorization_code`
  )
})
</script>

<template>
  <main>
    <van-button @click="handleClick">微信登录</van-button>
    <!-- <TheWelcome /> -->
  </main>
</template>
