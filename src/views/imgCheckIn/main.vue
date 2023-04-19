<!-- 图片打卡页面 -->
<template ref="imgCheckIn">
  <div class="container">
    <template v-for="(item, index) in imageUrls" :key="index">
      <div
        @click="flipHandle(index)"
        class="block"
        :class="activeKeys?.includes(index + '') ? 'cancel-block' : ''"
        :style="{
          backgroundImage: `url(${item})`
        }"
      ></div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
const router_useRouter = useRouter()
const activeKeys = useLocalStorage('activeKeys', [])
console.log(activeKeys,'activeKeys')
const img01 = 'https://img.league.linkiebuy.com/pic/p6796360302660000000781358948.png'
const img02 = 'https://img.league.linkiebuy.com/pic/p6680499734660000001540981891.jpeg'
const img03 = 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'

const imageUrls = [img01, img02, img03, img03, img03, img03, img03, img03, img03]

const flipHandle = (idx) => {
  router_useRouter.push({
    path: `/brief/detail/${idx}`
  })
}
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.block {
  width: 31%;
  height: 7rem;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: contain; */
}

.block:nth-child(3n + 3) {
  margin-bottom: 1rem;
}

.block::after {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  background-color: black;
  opacity: 0.5;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.cancel-block::after {
  display: none;
}
</style>
