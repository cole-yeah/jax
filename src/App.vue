<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
import Follow from '@/components/Follow.vue'
import { APP_ID, SECRET } from '@/constants'
import qs from 'qs'
import { wxApi } from '@/request'

const userInfo = useLocalStorage('userInfo', {
  nickname: '',
  headimgurl: '',
  openid: ''
})

const getWxCodeUrl = () => {
  const { href } = window.location // 重定向链接
  const encodeUrl = encodeURIComponent(href)
  const wxUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize'
  const scope = `snsapi_userinfo` // 获取用户信息
  const url = `${wxUrl}?appid=${APP_ID}&redirect_uri=${encodeUrl}&response_type=code&scope=${scope}#wechat_redirect`
  return url
}

const getUserInfoByToken = (oepnId, token) => {
  //   {
  //   "openid": "OPENID",
  //   "nickname": NICKNAME,
  //   "sex": 1,
  //   "province":"PROVINCE",
  //   "city":"CITY",
  //   "country":"COUNTRY",
  //   "headimgurl":"https://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
  //   "privilege":[ "PRIVILEGE1" "PRIVILEGE2"     ],
  //   "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
  // }
  wxApi
    .getUserInfo({
      oepnId,
      token
    })
    .then((res) => {
      // getUserInfoByToken()
    })
}

const getAccessTokenByCode = (code) => {
  if (!code) {
    return
  }
  //   {
  //   "access_token":"ACCESS_TOKEN",
  //   "expires_in":7200,
  //   "refresh_token":"REFRESH_TOKEN",
  //   "openid":"OPENID",
  //   "scope":"SCOPE",
  //   "is_snapshotuser": 1,
  //   "unionid": "UNIONID"
  // }
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
  const { search } = window.location
  const strParams = search.split('?')[1]
  const objParams = qs.parse(strParams)
  // 有code，根据code获取access_token
  if (objParams.code) {
    getAccessTokenByCode()
  } else {
    // 没有code，先根据appid获取code
    const url = getWxCodeUrl()
    window.open(url)
  }
})
</script>

<template>
  <RouterView />
  <template v-if="!userInfo?.openid">
    <Follow />
  </template>
</template>

<style scoped></style>
