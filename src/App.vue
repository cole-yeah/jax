<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
import Follow from '@/components/Follow.vue'

const userInfo = useLocalStorage('userInfo', {
  nickname: '',
  headimgurl: '',
  openid: ''
})
</script>

<template>
  <RouterView />
  <Follow />
</template>

<style scoped></style>
