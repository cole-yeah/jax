<script setup>
import { useRoute, useRouter } from 'vue-router'
import img01 from '@/assets/brief/img01.jpeg'

const { params } = useRoute()
const key = params?.key

const imgObj = {
  ['01']: img01
}

const url = imgObj[key]
</script>

<template>
  <div class="about">
    <van-image :src="url"></van-image>
  </div>
</template>

<style scoped></style>
