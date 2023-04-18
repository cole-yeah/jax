<!-- 图片打卡页面 -->
<template ref="imgCheckIn">
  <div class="container">
    <template v-for="(item, index) in imageUrls" :key="index">
      <div class="img" @click="flipHandle(index)">
        <img class="block" fit="contain" :src="item" />
        <div v-if="!activeKeys?.includes(index + '')" class="mask"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
const router_useRouter = useRouter()
const activeKeys = useLocalStorage('activeKeys', [])
const imageUrls = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
]

const flipHandle = (idx) => {
  router_useRouter.push({
    path: `/brief/detail/${idx}`
  })
}
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.img {
  position: relative;
  overflow: hidden;
}
.block {
  margin-bottom: 2%;
  width: 6rem;
  height: 6rem;
  margin-left: 0.5rem;
}

.mask {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 6rem;
  height: 6rem;
  margin-left: 0.5rem;
}
</style>
