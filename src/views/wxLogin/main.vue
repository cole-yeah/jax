<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { wxApi } from '@/request'
import { APP_ID, SECRET } from '@/constants'
import { useLocalStorage } from '@vueuse/core'

const userInfo = useLocalStorage('userInfo')

const getWxCodeUrl = () => {
  const redirectUri = `https://m.weilaijishi.cn/wxLogin` // 重定向链接
  const encodeUrl = encodeURIComponent(redirectUri)
  const wxUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize'
  const scope = `snsapi_userinfo` // 获取用户信息
  const url = `${wxUrl}?appid=${APP_ID}&redirect_uri=${encodeUrl}&response_type=code&scope=${scope}#wechat_redirect`
  return url
}

const getAccessTokenByCode = (code) => {
  if (!code) {
    return
  }
  wxApi
    .getToken({
      appId: APP_ID,
      secret: SECRET,
      code
    })
    .then((res) => {})
}

onBeforeMount(() => {
  if (userInfo?.openid) {
    return
  }
  const url = getWxCodeUrl()
  window.open(url)
})
</script>
<template>
  <div class="about">
    <h1>微信授权中...</h1>
  </div>
</template>

<style></style>
