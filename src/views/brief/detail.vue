<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useLocalStorage, useMounted } from '@vueuse/core'
import img01 from '@/assets/brief/img01.jpeg'
import { onMounted } from 'vue'

const { params } = useRoute()
const activeKeys = useLocalStorage('activeKeys', [])
const key = params?.key

const imgObj = {
  0: img01,
  1: img01,
  2: img01,
  3: img01,
  4: img01,
  5: img01,
  6: img01,
  7: img01,
  8: img01
}

const url = imgObj[key]

onMounted(() => {
  if (!url || !key) return
  activeKeys.value.push(key)
})
</script>

<template>
  <div class="about">
    <van-image :src="url"></van-image>
  </div>
</template>

<style scoped></style>
