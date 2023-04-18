<script setup>
import { RouterView } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

const userInfo = useLocalStorage('userInfo', {
  nickname: '',
  headimgurl: '',
  openid: ''
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
